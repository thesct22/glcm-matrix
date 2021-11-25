# For development
All codes are in src. Edit components in the /components direcotry or App.js in src

To start development server run

```sh
npm start
```

To build production build run

```sh
npm run build
```


# For Google App Engine
 Replace contents of package.json with contents of package.json.app-engine
 Run 

 ```sh
 npm run build
 gcloud init
 gcloud app deploy
 ```

 Select the correct project and other details

 # For Google Kubernetes Engine

 Run

 ```sh
 docker build -t gcr.io/<GCP-project-name>/<some-image-name>:<some-tag> .
 docker push gcr.io/<GCP-project-name>/<some-image-name>:<some-tag>
 ```

 Create a GKE cluster on console.
 Create a deployment inside the cluster by running the gke.yaml file with kubectl 
 Then create a load balancer service for the deployment and expose port 80 to external traffic with load-balancer.yaml

 Make sure you are in the same directory as the yaml files when running the below commands

 ```sh
 kubectl apply -f gke.yaml
 kubectl apply -f load-balancer.yaml
 ```

 This will deploy the app to GKE.
 If you go to ingress and service tab you can find the public IP of the load balancer

# For AWS S3

Create S3 bucket, make it public and enable the given bucket policy in permissions and then enable static website hosting in properties.

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadForGetBucketObjects",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::glcm-matrix-thesct22/*"
        }
    ]
}
```

Have AWS CLI installed on system
Then run the following commands and configure AWS CLI with an AWS IAM key and secret as instructed by the CLI on run time.

```sh
npm run build
aws configure
aws s3 sync build/ s3://<bucket-name>
```

Later you can find the URL in the static website tab in properties.

# For GitHub Pages

 Replace contents of package.json with contents of package.json.gh-pages
 Run 

 ```sh
 npm run build
 npm run deploy
 ```

 Later go to pages tab in settings of your repository for the link to your webpage.