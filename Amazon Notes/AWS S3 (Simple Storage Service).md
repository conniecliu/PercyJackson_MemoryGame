##### Functionality:
- Focused on General Object Storage that exists on the Cloud 
	- Kind of like Google Drive and Dropbox (you can use it to store anything)
- Can store big files, small files, media content, source code, spreadsheets, etc. 
- Why do we use it?
	- scalable, available, durable, and supports integrations with AWS
- Useful in different contexts:
	- website hosting 
	- database backups 
	- data processing pipelines 

##### Core Concepts:
1. Buckets 
	- container of objects you want to store within a certain namespace
		- sort of like folders or a file system 
		- bucket name **must** be unique 
2. Objects 
	- content you are storing inside your buckets 
	- there is a max file size of 5 terabytes 
3. Access
	- By URL: accessing an object via url 
		- ex) *http://s3.amazonaws.com/<**BUCKET_NAME**>/<**OBJECT_NAME**>*
		- this will only work if the s3 bucket is publicly exposed 
	- Programmatically: 
		- use a `get_object` request with Python and `boto3` library 
	- AWS Console 

##### S3 Storage Classes
- Storage classes allow you to reduce costs, but with certain sacrifices 
	- availability and latency suffers
- Examples (each storage class is automated by AWS):
	- Standard
	- Intelligent 
	- Infrequent Access
	- Glacier 
- **Lifecycle Rules** automate the data movement process 
	
##### Security 
- public access is blocked by default. 
- Highly durable and availability guarantees 
- Access and resourced based controls with AWS IAM
	- create groupings of different users with different controls and permissions 
- Auditing: access logs, action based logs, and alarms 