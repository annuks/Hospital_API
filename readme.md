# Hospital API
 ### Project Description
 
 #### API for Hospital management, where a Doctor can register patients after authorization, using mobile no. as unique identity.Doctors can create reports for patients and also can view the status of reports. 
Tech Stacks: HTML, Node JS, MongoDB.

#### (User Guide)
[http://localhost:8000/api/]
#### 1 For Doctor Registartion use in POSTMAN as POST request [/doctors/register] route and need to pass data in "x-www-urlencoded".
#### 2 For Login as Doctor , in POSTMAN use POST request [/doctors/login] route and need to pass data in "www-urlencoded" section.
####  3 For Patients Registartion in POSTMAN as POST request [/patients/register] route and need to pass token in "Header" and name,phone in "x-www-urlencoded"
####  4 For Patients Reports Creation in POSTMAN as POST request [/patients/:id/create_report] route and need to pass data in "x-www-urlencoded".
####     (Give Patient ID in url and Doctor ID as Bearer token in Header)
####  5 For Viewing Patients Reports (oldest to new), in POSTMAN as POST request [/patients/:id/all_reports] route and need to pass data in "x-www-urlencoded".
####  6 For getting All Reports Status use in POSTMAN as GET request [/patients/:status] route and need to pass data in "params" section.

##### This Projectn can be accessed from  https://hospitals-api-project.herokuapp.com/
