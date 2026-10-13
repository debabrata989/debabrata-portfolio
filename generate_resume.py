import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether
)

def create_resume(output_path):
    # Setup document with 0.45-inch margins for optimal ATS layout
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=32,
        bottomMargin=32
    )

    styles = getSampleStyleSheet()

    # Color Palette - Professional Tech Executive (Obsidian & Navy with subtle Cyan accents)
    PRIMARY_COLOR = colors.HexColor("#0f172a")    # Slate 900
    SECONDARY_COLOR = colors.HexColor("#0284c7")  # Sky/Cyan 600
    TEXT_DARK = colors.HexColor("#1e293b")        # Slate 800
    TEXT_MUTED = colors.HexColor("#475569")       # Slate 600
    LINE_COLOR = colors.HexColor("#cbd5e1")       # Slate 300
    BG_PILL = colors.HexColor("#f1f5f9")          # Slate 100

    # Custom Typography Styles
    style_name = ParagraphStyle(
        'ResumeName',
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=22,
        textColor=PRIMARY_COLOR,
        alignment=0
    )

    style_title = ParagraphStyle(
        'ResumeTitle',
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        textColor=SECONDARY_COLOR,
        alignment=0
    )

    style_contact = ParagraphStyle(
        'ResumeContact',
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=TEXT_MUTED,
        alignment=0
    )

    style_section_heading = ParagraphStyle(
        'SectionHeading',
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=13,
        textColor=PRIMARY_COLOR,
        spaceAfter=3,
        textTransform='uppercase'
    )

    style_item_title = ParagraphStyle(
        'ItemTitle',
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=TEXT_DARK
    )

    style_item_subtitle = ParagraphStyle(
        'ItemSubtitle',
        fontName='Helvetica-Oblique',
        fontSize=9,
        leading=11.5,
        textColor=SECONDARY_COLOR
    )

    style_item_date = ParagraphStyle(
        'ItemDate',
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11.5,
        textColor=TEXT_MUTED,
        alignment=2
    )

    style_bullet = ParagraphStyle(
        'ResumeBullet',
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=TEXT_DARK,
        leftIndent=10,
        firstLineIndent=-10
    )

    style_summary = ParagraphStyle(
        'ResumeSummary',
        fontName='Helvetica',
        fontSize=8.8,
        leading=12,
        textColor=TEXT_DARK
    )

    style_skill_label = ParagraphStyle(
        'SkillLabel',
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11.5,
        textColor=PRIMARY_COLOR
    )

    style_skill_val = ParagraphStyle(
        'SkillVal',
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=TEXT_DARK
    )

    story = []

    # 1. HEADER SECTION
    header_data = [
        [
            Paragraph("DEBABRATA MALIK", style_name),
            Paragraph("<b>Email:</b> debabratamalik989@gmail.com<br/><b>Location:</b> Bhubaneswar, Odisha, India", style_contact)
        ],
        [
            Paragraph("Full Stack Software Developer &bull; B.Tech CSE (Batch 2023 - 2027)", style_title),
            Paragraph("<b>GitHub:</b> <a href='https://github.com/debabrata989'><font color='#0284c7'><u>github.com/debabrata989</u></font></a><br/><b>LinkedIn:</b> <a href='https://www.linkedin.com/in/debabrata-malik-187281352/'><font color='#0284c7'><u>linkedin.com/in/debabrata-malik-187281352</u></font></a>", style_contact)
        ]
    ]

    header_table = Table(header_data, colWidths=[330, 210])
    header_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))

    story.append(header_table)
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=1.5, color=SECONDARY_COLOR, spaceBefore=2, spaceAfter=6))

    # 2. PROFESSIONAL SUMMARY
    story.append(Paragraph("PROFESSIONAL SUMMARY", style_section_heading))
    story.append(HRFlowable(width="100%", thickness=0.6, color=LINE_COLOR, spaceBefore=1, spaceAfter=4))
    summary_text = (
        "Motivated <b>Computer Science & Engineering student (Batch 2023&ndash;2027)</b> at GIET Bhubaneswar with "
        "hands-on industry internship experience in <b>MERN Stack Development (Ephorsys Pvt. Ltd.)</b> and practical "
        "technical training in <b>AI/ML (CTTC Bhubaneswar)</b>. Proven ability to build responsive web applications, secure "
        "RESTful APIs, and database schemas with <b>React.js, Node.js, Express, and MongoDB</b>. Strong foundations in Data Structures, "
        "Algorithms, Object-Oriented Programming, and agile development."
    )
    story.append(Paragraph(summary_text, style_summary))
    story.append(Spacer(1, 6))

    # 3. TECHNICAL SKILLS
    story.append(Paragraph("TECHNICAL SKILLS", style_section_heading))
    story.append(HRFlowable(width="100%", thickness=0.6, color=LINE_COLOR, spaceBefore=1, spaceAfter=4))

    skills_data = [
        [
            Paragraph("&bull; <b>Frontend:</b>", style_skill_label),
            Paragraph("React.js, JavaScript (ES6+), HTML5, CSS3, Responsive Design, Framer Motion, Context API", style_skill_val)
        ],
        [
            Paragraph("&bull; <b>Backend:</b>", style_skill_label),
            Paragraph("Node.js, Express.js, RESTful Architecture, JWT Authentication, Middleware, Postman", style_skill_val)
        ],
        [
            Paragraph("&bull; <b>Databases:</b>", style_skill_label),
            Paragraph("MongoDB, Mongoose ODM, MySQL (Relational DB & SQL Queries)", style_skill_val)
        ],
        [
            Paragraph("&bull; <b>Languages:</b>", style_skill_label),
            Paragraph("JavaScript, Python, SQL, C / C++ Fundamentals", style_skill_val)
        ],
        [
            Paragraph("&bull; <b>Tools & Others:</b>", style_skill_label),
            Paragraph("Git, GitHub, Vite, VS Code, Scikit-Learn, Pandas, NumPy, Agile Workflows", style_skill_val)
        ]
    ]

    skills_table = Table(skills_data, colWidths=[90, 450])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(skills_table)
    story.append(Spacer(1, 6))

    # 4. INDUSTRY EXPERIENCE & INTERNSHIPS
    story.append(Paragraph("INDUSTRY INTERNSHIPS & EXPERIENCE", style_section_heading))
    story.append(HRFlowable(width="100%", thickness=0.6, color=LINE_COLOR, spaceBefore=1, spaceAfter=4))

    # Experience 1: Ephorsys
    exp1_head = [
        [
            Paragraph("<b>MERN Stack Developer Intern</b> &bull; <font color='#0284c7'>Ephorsys Pvt. Limited</font>", style_item_title),
            Paragraph("2024 &ndash; 2025 | Bhubaneswar / Remote", style_item_date)
        ]
    ]
    t_exp1 = Table(exp1_head, colWidths=[380, 160])
    t_exp1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_exp1)

    story.append(Paragraph("&bull; Developed scalable, modular frontend interfaces in <b>React.js</b> with reusable component architecture and state management.", style_bullet))
    story.append(Paragraph("&bull; Designed and integrated secure <b>RESTful APIs</b> with <b>Node.js & Express.js</b>, implementing JWT auth and request validation.", style_bullet))
    story.append(Paragraph("&bull; Engineered <b>MongoDB</b> schemas via Mongoose ODM for reliable document storage, indexing, and high-performance CRUD queries.", style_bullet))
    story.append(Paragraph("&bull; Conducted comprehensive API testing using <b>Postman</b> and collaborated on Git/GitHub version control workflows.", style_bullet))
    story.append(Spacer(1, 5))

    # Experience 2: CTTC
    exp2_head = [
        [
            Paragraph("<b>Artificial Intelligence & Machine Learning Intern</b> &bull; <font color='#0284c7'>CTTC Bhubaneswar</font>", style_item_title),
            Paragraph("2024 | Bhubaneswar, Odisha", style_item_date)
        ]
    ]
    t_exp2 = Table(exp2_head, colWidths=[380, 160])
    t_exp2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_exp2)

    story.append(Paragraph("&bull; Completed intensive training on <b>Python scientific computing</b>, data preprocessing pipelines, and exploratory data analysis (EDA).", style_bullet))
    story.append(Paragraph("&bull; Trained and benchmarked supervised machine learning models (Linear/Logistic Regression, Decision Trees) with <b>Scikit-Learn</b>.", style_bullet))
    story.append(Paragraph("&bull; Utilized <b>Pandas & NumPy</b> for data cleansing, missing value imputation, outlier detection, and performance evaluation.", style_bullet))
    story.append(Spacer(1, 6))

    # 5. FEATURED PROJECTS
    story.append(Paragraph("FEATURED SOFTWARE PROJECTS", style_section_heading))
    story.append(HRFlowable(width="100%", thickness=0.6, color=LINE_COLOR, spaceBefore=1, spaceAfter=4))

    # Project: OmniAI Voice & Task Assistant
    p_ai_head = [
        [
            Paragraph("<b>OmniAI: Conversational AI Voice Assistant</b> | <i>React.js, Node.js, LLM API, Web Speech</i>", style_item_title),
            Paragraph("Full Stack & GenAI", style_item_date)
        ]
    ]
    t_p_ai = Table(p_ai_head, colWidths=[420, 120])
    t_p_ai.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('LEFTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_p_ai)
    story.append(Paragraph("&bull; Built multi-modal conversational AI copilot with SSE token streaming, voice command synthesis, and MongoDB chat persistence.", style_bullet))
    story.append(Spacer(1, 3))

    # Project: EduCampus College ERP
    p_erp_head = [
        [
            Paragraph("<b>EduCampus: College ERP & Student Management</b> | <i>React.js, Node.js, Express, MongoDB, RBAC</i>", style_item_title),
            Paragraph("MERN Enterprise Portal", style_item_date)
        ]
    ]
    t_p_erp = Table(p_erp_head, colWidths=[420, 120])
    t_p_erp.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('LEFTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_p_erp)
    story.append(Paragraph("&bull; Architected multi-tier ERP portal (Admin/Faculty/Student) with automated attendance tracking, SGPA/CGPA engine, and fee invoices.", style_bullet))
    story.append(Spacer(1, 3))

    # Project 1: Food Delivery
    p1_head = [
        [
            Paragraph("<b>MERN Food Delivery Application</b> | <i>React.js, Node.js, Express, MongoDB, JWT</i>", style_item_title),
            Paragraph("Full Stack Web App", style_item_date)
        ]
    ]
    t_p1 = Table(p1_head, colWidths=[420, 120])
    t_p1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('LEFTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_p1)
    story.append(Paragraph("&bull; Engineered end-to-end full-stack food delivery application with user authentication, live cart state, and order management.", style_bullet))
    story.append(Paragraph("&bull; Built secure payment integration logic, structured REST API routes, and modeled relational-like references in MongoDB.", style_bullet))
    story.append(Spacer(1, 4))

    # Project 2: Student Helper / AI Assistant
    p2_head = [
        [
            Paragraph("<b>Student Helper & AI Study Assistant</b> | <i>React.js, Node.js, AI API, Responsive CSS</i>", style_item_title),
            Paragraph("EdTech Web Solution", style_item_date)
        ]
    ]
    t_p2 = Table(p2_head, colWidths=[420, 120])
    t_p2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('LEFTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_p2)
    story.append(Paragraph("&bull; Created educational assistant allowing students to query academic topics, generate study notes, and track exam schedules.", style_bullet))
    story.append(Paragraph("&bull; Designed responsive glassmorphism UI with clean keyboard navigation, local caching, and seamless API response streaming.", style_bullet))
    story.append(Spacer(1, 4))

    # Project 3: Modern Portfolio
    p3_head = [
        [
            Paragraph("<b>Developer Portfolio & Interactive Shell</b> | <i>React 19, Vite, Framer Motion, Vanilla CSS</i>", style_item_title),
            Paragraph("Personal Portfolio", style_item_date)
        ]
    ]
    t_p3 = Table(p3_head, colWidths=[420, 120])
    t_p3.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('LEFTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_p3)
    story.append(Paragraph("&bull; Designed 100/100 responsive developer portfolio with custom CSS tokens, smooth scrolling, and custom interactive terminal emulator.", style_bullet))
    story.append(Spacer(1, 6))

    # 6. EDUCATION
    story.append(Paragraph("EDUCATION", style_section_heading))
    story.append(HRFlowable(width="100%", thickness=0.6, color=LINE_COLOR, spaceBefore=1, spaceAfter=4))

    edu_head = [
        [
            Paragraph("<b>Bachelor of Technology (B.Tech) in Computer Science & Engineering</b>", style_item_title),
            Paragraph("<b>2023 &ndash; 2027</b>", style_item_date)
        ],
        [
            Paragraph("Gandhi Institute for Education and Technology (GIET), Bhubaneswar, Odisha", style_item_subtitle),
            Paragraph("Currently Pursuing", style_item_date)
        ]
    ]
    t_edu = Table(edu_head, colWidths=[420, 120])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_edu)
    story.append(Paragraph("&bull; <i>Relevant Coursework:</i> Data Structures & Algorithms, Object-Oriented Programming (OOP), DBMS, Computer Networks, OS.", style_bullet))
    story.append(Spacer(1, 3))

    edu2_head = [
        [
            Paragraph("<b>Higher Secondary Certificate (+2 Science)</b> &bull; Bhadrak Autonomous College", style_item_title),
            Paragraph("Completed", style_item_date)
        ]
    ]
    t_edu2 = Table(edu2_head, colWidths=[420, 120])
    t_edu2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('LEFTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_edu2)
    story.append(Spacer(1, 6))

    # 7. CERTIFICATIONS
    story.append(Paragraph("CERTIFICATIONS & TRAINING", style_section_heading))
    story.append(HRFlowable(width="100%", thickness=0.6, color=LINE_COLOR, spaceBefore=1, spaceAfter=4))
    story.append(Paragraph("&bull; <b>MERN Stack Development Internship Certificate</b> &ndash; Ephorsys Pvt. Limited (2024 &ndash; 2025)", style_bullet))
    story.append(Paragraph("&bull; <b>Artificial Intelligence & Machine Learning Certificate</b> &ndash; Central Tool Room & Training Centre (CTTC), Bhubaneswar (2024)", style_bullet))
    story.append(Paragraph("&bull; <b>Workshop on Practical Machine Learning with Python</b> &ndash; Technical Training Division (2024)", style_bullet))

    doc.build(story)
    print(f"Successfully generated resume at: {output_path}")

if __name__ == "__main__":
    public_path = os.path.abspath("d:/Antigravity/PORTFOLIO 2/public/resume.pdf")
    dist_path = os.path.abspath("d:/Antigravity/PORTFOLIO 2/dist/resume.pdf")
    create_resume(public_path)
    if os.path.exists("d:/Antigravity/PORTFOLIO 2/dist"):
        create_resume(dist_path)
