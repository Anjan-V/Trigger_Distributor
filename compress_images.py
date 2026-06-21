import os
from PIL import Image

assets_dir = 'a:/Project/Trigger_Distributors/src/assets'

for filename in os.listdir(assets_dir):
    if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
        filepath = os.path.join(assets_dir, filename)
        try:
            with Image.open(filepath) as img:
                original_size = os.path.getsize(filepath)
                
                # Resize if width > 800
                max_width = 800
                if img.width > max_width:
                    ratio = max_width / float(img.width)
                    new_height = int((float(img.height) * float(ratio)))
                    img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                
                if filename.lower().endswith('.png'):
                    img.save(filepath, format='PNG', optimize=True)
                else:
                    if img.mode != 'RGB':
                        img = img.convert('RGB')
                    img.save(filepath, format='JPEG', optimize=True, quality=60)
                
                new_size = os.path.getsize(filepath)
                print(f"Compressed {filename}: {original_size//1024}KB -> {new_size//1024}KB")
        except Exception as e:
            print(f"Failed to compress {filename}: {e}")
