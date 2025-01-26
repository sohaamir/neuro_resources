document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('#content');
    const toc = document.querySelector('#toc');
    const headings = Array.from(content.querySelectorAll('h1, h2, h3, h4'));
    
    function createTocStructure(headings) {
        const root = { level: 0, children: [] };
        let currentParent = root;
        const stack = [root];
        
        headings.forEach(heading => {
            const level = parseInt(heading.tagName[1]);
            const headingText = heading.textContent;
            const headingId = headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            heading.id = headingId;
            
            const node = {
                level: level,
                text: headingText,
                id: headingId,
                children: []
            };
            
            while (stack[stack.length - 1].level >= level) {
                stack.pop();
            }
            
            currentParent = stack[stack.length - 1];
            currentParent.children.push(node);
            stack.push(node);
        });
        
        return root;
    }
    
    function renderToc(node, container) {
        if (node.children.length === 0) return;
        
        const ul = document.createElement('ul');
        
        node.children.forEach(child => {
            const li = document.createElement('li');
            
            // Create dropdown container for h2 headings
            if (child.level === 2) {
                const dropdownBtn = document.createElement('button');
                dropdownBtn.className = 'dropdown-btn';
                dropdownBtn.textContent = child.text;
                
                // Add click event for dropdown
                dropdownBtn.addEventListener('click', function() {
                    this.classList.toggle('active');
                    const content = this.nextElementSibling;
                    if (content.style.display === 'block') {
                        content.style.display = 'none';
                    } else {
                        content.style.display = 'block';
                    }
                });
                
                li.appendChild(dropdownBtn);
                
                // Create dropdown content container
                const dropdownContent = document.createElement('div');
                dropdownContent.className = 'dropdown-content';
                if (child.children.length > 0) {
                    renderToc(child, dropdownContent);
                }
                li.appendChild(dropdownContent);
            } else {
                // For non-h2 headings, create normal links
                const a = document.createElement('a');
                a.textContent = child.text;
                a.href = '#' + child.id;
                li.appendChild(a);
                
                if (child.children.length > 0) {
                    renderToc(child, li);
                }
            }
            
            ul.appendChild(li);
        });
        
        container.appendChild(ul);
    }
    
    const tocStructure = createTocStructure(headings);
    renderToc(tocStructure, toc);
});