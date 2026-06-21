import os
from PIL import Image

assets_dir = 'a:/Project/Trigger_Distributors/src/assets'
src_dir = 'a:/Project/Trigger_Distributors/src'

for filename in os.listdir(assets_dir):
    if filename.lower().endswith('.png') and filename != 'Logo.png':
        filepath = os.path.join(assets_dir, filename)
        new_filename = filename[:-4] + '.jpg'
        new_filepath = os.path.join(assets_dir, new_filename)
        
        try:
            with Image.open(filepath) as img:
                if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                    # Create a white background
                    background = Image.new('RGB', img.size, (255, 255, 255))
                    if img.mode == 'P':
                        img = img.convert('RGBA')
                    background.paste(img, mask=img.split()[3])
                    img = background
                elif img.mode != 'RGB':
                    img = img.convert('RGB')
                
                # Resize if width > 1000
                max_width = 1000
                if img.width > max_width:
                    ratio = max_width / float(img.width)
                    new_height = int((float(img.height) * float(ratio)))
                    img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                
                img.save(new_filepath, format='JPEG', optimize=True, quality=60)
            
            os.remove(filepath)
            print(f"Converted {filename} to {new_filename} ({os.path.getsize(new_filepath)//1024}KB)")
            
            # Update JSX imports
            for root, _, files in os.walk(src_dir):
                for f in files:
                    if f.endswith('.jsx'):
                        jsx_path = os.path.join(root, f)
                        with open(jsx_path, 'r', encoding='utf-8') as file:
                            content = file.read()
                        
                        new_content = content.replace(filename, new_filename)
                        if new_content != content:
                            with open(jsx_path, 'w', encoding='utf-8') as file:
                                file.write(new_content)
                                
        except Exception as e:
            print(f"Failed to process {filename}: {e}")
