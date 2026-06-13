import os

def replace_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    new_content = content
    
    replacements = [
        ("'Professional dental care for the whole family in Pune. Book your appointment in 30 seconds.'", 
         "clinicConfig.seo.description"),
         
        ('"Professional dental care for the whole family in Pune. Book your appointment in 30 seconds."', 
         "clinicConfig.seo.description"),
         
        ('"dentist Pune"', '`dentist ${clinicConfig.city}`'),
        ("'dentist Pune'", '`dentist ${clinicConfig.city}`'),
        
        ("${'Pune'}", "${clinicConfig.city}"),
        ("{'Pune'}", "{clinicConfig.city}"),
        
        ("addressLocality: 'Pune'", "addressLocality: clinicConfig.city"),
        ('addressLocality: "Pune"', "addressLocality: clinicConfig.city"),
        
        ("name: 'Pune'", "name: clinicConfig.city"),
        ('name: "Pune"', "name: clinicConfig.city"),

        ("[\"dental clinic\", \"dentist Pune\", \"teeth whitening\", \"dental implants\", \"orthodontics\", \"painless dentistry\"]",
         "clinicConfig.seo.keywords"),
        
        ("keywords: [\"dental clinic\", `dentist ${clinicConfig.city}`, \"teeth whitening\", \"dental implants\", \"orthodontics\", \"painless dentistry\"]",
         "keywords: clinicConfig.seo.keywords"),
    ]

    for old, new in replacements:
        new_content = new_content.replace(old, new)

    if new_content != content:
        if "clinicConfig" in new_content and "import { clinicConfig }" not in new_content and "import clinicConfig" not in new_content:
            if filepath.startswith("src/lib"):
                new_content = "import { clinicConfig } from '@/app/lib/clinic-config';\n" + new_content
            else:
                new_content = "import { clinicConfig } from '@/app/lib/clinic-config';\n" + new_content

        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, _, files in os.walk("src"):
    for file in files:
        if file.endswith((".js", ".jsx", ".ts", ".tsx")) and file not in ("clinicConfig.js", "clinic-config.ts", "data.js", "replace_pune.py"):
            replace_in_file(os.path.join(root, file))
