import {DataStore} from "./data.type";

const DATA: DataStore = {
    "scholarship": {
        name: "Scholarship",
        short_desc: "This includes all the scholarships, grants, and funding available for students.",
        keywords: ["scholarship", "egrantz", "fisheries grantz", "funding", "grants"],
        items: [
            {
                title: "E-Grantz Scholarship",
                description: "A government scholarship for students from reserved categories to support their education.",
                steps: [
                    {
                        title: "Check Eligibility",
                        description: "Ensure you meet the eligibility criteria based on category and income limit.",
                        responsible_authority: "Student Affairs Office",
                        expected_time: "2-3 days",
                    },
                    {
                        title: "Apply Online",
                        description: "Fill out the application on the official E-Grantz portal.",
                        responsible_authority: "Student",
                        expected_time: "1 hour",
                    },
                    {
                        title: "Submit Documents",
                        description: "Submit required documents like caste certificate, income certificate, and bank details.",
                        responsible_authority: "College Office",
                        expected_time: "5-7 days",
                    },
                    {
                        title: "Verification & Approval",
                        description: "The college and government authorities verify the documents and approve the scholarship.",
                        responsible_authority: "Scholarship Department",
                        expected_time: "2-3 weeks",
                    },
                    {
                        title: "Scholarship Disbursal",
                        description: "The scholarship amount is credited to the student's bank account.",
                        responsible_authority: "State Government",
                        expected_time: "1 month",
                    },
                ],
                docs_needed: [
                    {
                        type: "form",
                        template: "E-Grantz Application Form",
                        fields: ["Name", "Category", "Income", "Bank Details", "Aadhaar Number"],
                    },
                    {
                        type: "letter",
                        template: "Bonafide Certificate Request",
                        fields: ["Student Name", "Roll Number", "Course Name"],
                    },
                ],
                related_links: [
                    "https://egrantz.kerala.gov.in",
                    "https://scholarships.gov.in",
                ],
            },
        ],
    },
    "bonafide certificate": {
        name: "Bonafide Certificate",
        short_desc: "How to apply for a bonafide certificate from the college.",
        keywords: ["bonafide", "certificate", "proof of study", "student letter"],
        items: [
            {
                title: "Bonafide Certificate Application",
                description: "A bonafide certificate is proof that a student is currently enrolled in the institution.",
                steps: [
                    {
                        title: "Write a Request Letter",
                        description: "Write a formal request letter to the principal for a bonafide certificate.",
                        responsible_authority: "Student",
                        expected_time: "30 minutes",
                    },
                    {
                        title: "Get Staff Advisor's Approval",
                        description: "Submit the letter to your staff advisor for approval.",
                        responsible_authority: "Staff Advisor",
                        expected_time: "1-2 days",
                    },
                    {
                        title: "Forward to HOD",
                        description: "The approved request must be forwarded to the Head of Department (HOD).",
                        responsible_authority: "Head of Department",
                        expected_time: "1-2 days",
                    },
                    {
                        title: "Submit to College Office",
                        description: "The request is forwarded to the college office for verification.",
                        responsible_authority: "College Office",
                        expected_time: "2-3 days",
                    },
                    {
                        title: "Receive Certificate",
                        description: "After approval, collect the signed bonafide certificate from the office.",
                        responsible_authority: "Principal",
                        expected_time: "1 day",
                    },
                ],
                docs_needed: [
                    {
                        type: "letter",
                        template: "Bonafide Certificate Request Letter",
                        fields: ["Student Name", "Roll Number", "Course Name", "Reason for Request"],
                    },
                ],
                related_links: [
                    "https://college-website.com/bonafide-procedure",
                ],
            },
        ],
    },
    "hostel admission": {
        name: "hostel admission",
        short_desc: "Guidelines and procedures for applying to the college hostel.",
        keywords: ["hostel", "accommodation", "room allotment", "student housing"],
        items: [
            {
                title: "Hostel Admission Process",
                description: "Steps to apply for hostel accommodation for students.",
                steps: [
                    {
                        title: "Fill Out Hostel Application Form",
                        description: "Complete the application form available on the college website.",
                        responsible_authority: "Student",
                        expected_time: "1 day",
                    },
                    {
                        title: "Submit Form to Hostel Warden",
                        description: "Submit the filled form to the hostel warden along with required documents.",
                        responsible_authority: "Hostel Warden",
                        expected_time: "2-3 days",
                    },
                    {
                        title: "Verification and Approval",
                        description: "The warden reviews the application and allots rooms based on availability.",
                        responsible_authority: "Hostel Committee",
                        expected_time: "1 week",
                    },
                    {
                        title: "Payment of Hostel Fees",
                        description: "Pay the hostel fees via online portal or at the college office.",
                        responsible_authority: "Accounts Department",
                        expected_time: "1-2 days",
                    },
                    {
                        title: "Room Allotment and Key Collection",
                        description: "Students receive room details and collect keys from the hostel office.",
                        responsible_authority: "Hostel Office",
                        expected_time: "1 day",
                    },
                ],
                docs_needed: [
                    {
                        type: "form",
                        template: "Hostel Admission Form",
                        fields: ["Name", "Roll Number", "Course", "Guardian Contact", "Medical History"],
                    },
                    {
                        type: "letter",
                        template: "Hostel Admission Request Letter",
                        fields: ["Student Name", "Roll Number", "Reason for Staying in Hostel"],
                    },
                ],
                related_links: [
                    "https://college-hostel.com/admissions",
                    "https://college-hostel.com/rules",
                ],
            },
        ],
    },
    "internship certificate": {
        name: "internship certificate",
        short_desc: "Details on how to request an internship completion certificate.",
        keywords: ["internship", "certificate", "experience letter", "industrial training"],
        items: [
            {
                title: "Requesting Internship Completion Certificate",
                description: "Process to obtain a certificate after completing an internship.",
                steps: [
                    {
                        title: "Write a Request Letter",
                        description: "Submit a formal request to the training and placement office.",
                        responsible_authority: "Student",
                        expected_time: "30 minutes",
                    },
                    {
                        title: "Submit Internship Completion Report",
                        description: "Provide a report detailing your internship experience and work done.",
                        responsible_authority: "Internship Coordinator",
                        expected_time: "2-3 days",
                    },
                    {
                        title: "Verification by Department",
                        description: "HOD and faculty review and approve the request.",
                        responsible_authority: "Department Head",
                        expected_time: "1 week",
                    },
                    {
                        title: "Certificate Issuance",
                        description: "After approval, the certificate is issued to the student.",
                        responsible_authority: "Training & Placement Office",
                        expected_time: "2-3 days",
                    },
                ],
                docs_needed: [
                    {
                        type: "letter",
                        template: "Internship Certificate Request Letter",
                        fields: ["Student Name", "Roll Number", "Company Name", "Internship Duration"],
                    },
                    {
                        type: "report",
                        template: "Internship Completion Report",
                        fields: ["Project Summary", "Technologies Used", "Internship Supervisor Name"],
                    },
                ],
                related_links: [
                    "https://college-tpo.com/internship-guidelines",
                ],
            },
        ],
    },
    "library membership": {
        name: "library membership",
        short_desc: "Information on how to obtain a library membership card.",
        keywords: ["library", "books", "membership", "library card", "borrow books"],
        items: [
            {
                title: "Library Membership Registration",
                description: "Steps to register for a library membership and obtain a library card.",
                steps: [
                    {
                        title: "Fill Library Membership Form",
                        description: "Submit the form available at the library or college website.",
                        responsible_authority: "Student",
                        expected_time: "30 minutes",
                    },
                    {
                        title: "Attach Required Documents",
                        description: "Attach a copy of student ID and passport-size photograph.",
                        responsible_authority: "Student",
                        expected_time: "1 day",
                    },
                    {
                        title: "Submit Form at Library Desk",
                        description: "Hand over the completed form to the library in-charge.",
                        responsible_authority: "Library Staff",
                        expected_time: "1-2 days",
                    },
                    {
                        title: "Verification and Approval",
                        description: "The library verifies student details and processes the request.",
                        responsible_authority: "Library In-Charge",
                        expected_time: "2-3 days",
                    },
                    {
                        title: "Receive Library Card",
                        description: "Collect the library card from the library office.",
                        responsible_authority: "Library Staff",
                        expected_time: "1 day",
                    },
                ],
                docs_needed: [
                    {
                        type: "form",
                        template: "Library Membership Form",
                        fields: ["Name", "Roll Number", "Course", "Mobile Number"],
                    },
                    {
                        type: "document",
                        template: "Student ID Copy",
                        fields: ["ID Number", "Student Name", "Course"],
                    },
                ],
                related_links: [
                    "https://college-library.com/membership",
                    "https://college-library.com/rules",
                ],
            },
        ],
    },
    "exam registration": {
        name: "exam registration",
        short_desc: "Steps to register for semester exams.",
        keywords: ["exam", "registration", "semester", "exam fees"],
        items: [
            {
                title: "Exam Registration Process",
                description: "Process to register for semester exams and pay fees.",
                steps: [
                    {
                        title: "Check Exam Notification",
                        description: "Ensure you are aware of the exam registration deadline.",
                        responsible_authority: "Exam Cell",
                        expected_time: "1 day",
                    },
                    {
                        title: "Fill Exam Registration Form",
                        description: "Complete the form available on the exam portal.",
                        responsible_authority: "Student",
                        expected_time: "30 minutes",
                    },
                    {
                        title: "Pay Exam Fees",
                        description: "Make the payment via online banking or college fee counter.",
                        responsible_authority: "Accounts Department",
                        expected_time: "1-2 days",
                    },
                    {
                        title: "Submit Registration Form",
                        description: "Submit the completed form along with payment receipt.",
                        responsible_authority: "Exam Cell",
                        expected_time: "1-2 days",
                    },
                    {
                        title: "Receive Exam Hall Ticket",
                        description: "Download or collect the hall ticket before the exams.",
                        responsible_authority: "Exam Office",
                        expected_time: "3-5 days",
                    },
                ],
                docs_needed: [
                    {
                        type: "form",
                        template: "Exam Registration Form",
                        fields: ["Student Name", "Roll Number", "Subjects", "Exam Center"],
                    },
                    {
                        type: "receipt",
                        template: "Exam Fee Payment Receipt",
                        fields: ["Transaction ID", "Amount", "Date"],
                    },
                ],
                related_links: [
                    "https://college-exams.com/registration",
                    "https://college-exams.com/fees",
                ],
            },
        ],
    },
    "student clubs": {
        name: "student_clubs",
        short_desc: "Guidelines on joining and participating in student-run clubs and organizations.",
        keywords: ["clubs", "student organizations", "coding club", "sports club", "music club"],
        items: [
            {
                title: "Joining a Student Club",
                description: "Steps to become a member of a student-run club at the college.",
                steps: [
                    {
                        title: "Find the Right Club",
                        description: "Explore the list of clubs available and select one that matches your interests.",
                        responsible_authority: "Student Affairs Office",
                        expected_time: "1-2 days",
                    },
                    {
                        title: "Attend an Orientation Session",
                        description: "Join the club’s introductory meeting to understand its activities and goals.",
                        responsible_authority: "Club Coordinator",
                        expected_time: "1 day",
                    },
                    {
                        title: "Fill Out the Membership Form",
                        description: "Submit the necessary details to officially become a club member.",
                        responsible_authority: "Club Secretary",
                        expected_time: "1-2 days",
                    },
                ],
                docs_needed: [
                    {
                        type: "form",
                        template: "Club Membership Form",
                        fields: ["Student Name", "Roll Number", "Preferred Club", "Contact Email"],
                    },
                ],
                related_links: [
                    "https://college.edu/clubs",
                ],
            },
        ],
    },
    "sports ground facilities": {
        name: "sports_ground_facilities",
        short_desc: "Information on how students can access and use sports facilities on campus.",
        keywords: ["sports", "ground booking", "football", "badminton", "cricket"],
        items: [
            {
                title: "Booking a Sports Ground",
                description: "Procedure to book a sports ground for team practice or tournaments.",
                steps: [
                    {
                        title: "Check Availability",
                        description: "Look at the schedule to find available slots.",
                        responsible_authority: "Sports Department",
                        expected_time: "1 day",
                    },
                    {
                        title: "Submit a Request",
                        description: "Fill out a booking request form and submit it to the sports office.",
                        responsible_authority: "Student",
                        expected_time: "1-2 days",
                    },
                    {
                        title: "Get Approval",
                        description: "Receive confirmation from the sports committee.",
                        responsible_authority: "Sports Office",
                        expected_time: "2 days",
                    },
                ],
                docs_needed: [
                    {
                        type: "form",
                        template: "Sports Facility Booking Form",
                        fields: ["Student Name", "Sport", "Date & Time", "Purpose"],
                    },
                ],
                related_links: [
                    "https://college.edu/sports"
                ],
            },
        ],
    },
    "gym_membership": {
        name: "gym_membership",
        short_desc: "How students can enroll in the campus gym and fitness programs.",
        keywords: ["gym", "fitness", "workout", "exercise"],
        items: [
            {
                title: "Getting a Gym Membership",
                description: "Steps to apply for and access the college gym facilities.",
                steps: [
                    {
                        title: "Check Eligibility",
                        description: "Ensure you meet the basic criteria for gym access.",
                        responsible_authority: "Gym Trainer",
                        expected_time: "1 day",
                    },
                    {
                        title: "Fill Out the Membership Form",
                        description: "Complete and submit the gym membership application.",
                        responsible_authority: "Student",
                        expected_time: "1 day",
                    },
                    {
                        title: "Pay the Membership Fee",
                        description: "Complete the payment process for gym access.",
                        responsible_authority: "Accounts Office",
                        expected_time: "1-2 days",
                    },
                ],
                docs_needed: [
                    {
                        type: "form",
                        template: "Gym Membership Form",
                        fields: ["Student Name", "Roll Number", "Medical Conditions (if any)"],
                    },
                ],
                related_links: [
                    "https://college.edu/gym",
                ],
            },
        ],
    },
    "exploring extra spaces": {
        name: "exploring_extra_spaces",
        short_desc: "Details on available study rooms, lounges, and quiet spaces for students.",
        keywords: ["study rooms", "library", "quiet zones", "discussion rooms"],
        items: [
            {
                title: "Using Study Spaces",
                description: "How to access study lounges and book discussion rooms.",
                steps: [
                    {
                        title: "Find Available Spaces",
                        description: "Check the list of study areas and their availability.",
                        responsible_authority: "Library Administration",
                        expected_time: "1 day",
                    },
                    {
                        title: "Book a Discussion Room",
                        description: "Submit a request for reserving a study room for group projects.",
                        responsible_authority: "Library Staff",
                        expected_time: "1 day",
                    },
                ],
                related_links: [
                    "https://college.edu/library",
                ],
            },
        ],
    },
    "food spots": {
        name: "food_spots",
        short_desc: "Guide to campus food spots including canteens, cafes, and food stalls.",
        keywords: ["food", "canteen", "cafeteria", "coffee shop", "snacks"],
        items: [
            {
                title: "Exploring Campus Food Spots",
                description: "A guide to the best food places on campus.",
                steps: [
                    {
                        title: "Locate the Nearest Food Spot",
                        description: "Check out the campus map to find nearby cafes and canteens.",
                        responsible_authority: "Student Welfare Office",
                    },
                    {
                        title: "Check Menu & Pricing",
                        description: "View the available food options and their prices.",
                        responsible_authority: "Canteen Staff",
                    },
                ],
                related_links: [
                    "https://college.edu/food"
                ],
            },
        ],
    },
};
export default DATA;