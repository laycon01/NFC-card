# Student Multipurpose Card

This Next.js-based project aims to replace traditional student ID cards with streamlined NFC-enabled cards. Students can easily access crucial information on demand, while the school benefits from:

-    Efficient attendance tracking
-    Centralized student data management
-    Secure and user-friendly interfaces for both students and admins.

### Transforming Student Information Management with NFC

## Frontend

**General**

-    **Homepage:** A simple landing page before login (may display school information, project title)

**Authentication**

-    **Login:**
     -    Input fields for username/email and password
     -    "Forgot Password?" link
-    **Student Registration (Optional):**
     -    Fields to collect necessary student data

**Student Area**

-    **Student Dashboard:**
     -    Profile summary (Name, Photo, ID, Course)
     -    Fee Status (with visual indicators)
     -    Tabs/Sections for:
          -    Attendance Overview (calendar or list)
          -    Exam Schedule (if applicable)
          -    Notifications (if applicable)
-    **Attendance Details:** (accessed via dashboard tab)
     -    Detailed list or in-depth calendar view of attendance history
     -    Might be PIN-protected
-    **Exam Schedule:** (accessed via dashboard tab)
     -    List of upcoming exams student is eligible for
     -    Potentially PIN-protected
-    **Profile Settings:**
     -    Allow updating basic profile information (address, contact info)
     -    Change PIN

**Admin Area**

-    **Admin Dashboard:**
     -    System overview (number of students, recent attendance trends, etc.)
-    **Student Management:**
     -    Add New Student (detailed form to input all data)
     -    Edit Student Details
     -    Search and filter students
-    **Attendance Management:**
     -    View Overview (attendance per class/date range)
     -    Manual Attendance Editing (for corrections)
-    **Exam Pass Management:**
     -    Set Exam Eligibility Criteria (attendance based, fee based, etc.)
     -    Issue/Revoke Exam Passes
-    **Fee Management:**
     -    View/filter fee payment status across students
     -    Mark fees as paid
-    **Reports (Optional):**
     -    Attendance Reports (customizable by date range, course)
     -    Fee Payment Reports

**Additional Notes**

-    **Error Pages:** Include 404 (Not Found) and other error pages as needed.
-    **Mobile Responsiveness:** Design for all screen sizes.
