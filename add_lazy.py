import os

files = [
    'a:/Project/Trigger_Distributors/src/pages/Category.jsx',
    'a:/Project/Trigger_Distributors/src/pages/Gallery.jsx',
    'a:/Project/Trigger_Distributors/src/components/ProductCard.jsx',
    'a:/Project/Trigger_Distributors/src/pages/About.jsx'
]

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    content = content.replace('<img ', '<img loading="lazy" ')
    
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)
        
    print('Updated ' + f)
