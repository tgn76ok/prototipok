const minioUrl = process.env.MINIO_URL;
const accessKey = process.env.MINIO_ACCESS_KEY;
const secretKey = process.env.MINIO_SECRET_KEY;
const bucketName = process.env.MINIO_BUCKET_NAME;

const credentials = {
  accessKeyId: '9VQP1Fy0rcT7xQgc3Kqn',
  secretAccessKey: 'YcxlsR9NVlaapS8MBRGKiWPdnWysigRD2y2TmbrL',
};

const AWS = require("aws-sdk");

if (!minioUrl){

  
  AWS.config.update({ credentials: credentials, region: "us-east-2" });
}else
  AWS.config.update({
    credentials: credentials,
    region: "us-east-2",
    endpoint: minioUrl,
    s3ForcePathStyle: true,
  });
  
  const s3 = new AWS.S3({ signatureVersion: "v4" });
  
  const s3Service = {};
  
  s3Service.deleteWithPreSignedUrl = (fileName) => {
    if (fileName) {
    return s3.getSignedUrl("deleteObject", {
      Bucket: bucketName,
      Key: fileName,
      Expires: 3600,
    });
  } else {
    return null;
  }
};

s3Service.getWithPresignedUrl = (fileName, fileType = "image/png") => {
  if (fileName) {
    return s3.getSignedUrl("getObject", {
      Bucket: bucketName,
      Key: fileName,
      Expires: 3600,
      ResponseContentType: fileType,
    });
  } else {
    return null;
  }
};

s3Service.putWithPresignedUrl = (fileName, fileType = "image/png") => {
  if (fileName) {
    console.log(accessKey,"|      -   |",secretKey)
    return s3.getSignedUrl("putObject", {
      Bucket: bucketName,
      Key: fileName,
      Expires: 300,
      ContentType: fileType,
    });
  } else {
    return null;
  }
};

// s3Service.putWithPresignedUrl = (fileName, fileType = "image/png") => {
//   if (fileName) {
//     return s3.presignedPutObject(
//       bucketName,
//       fileName,
//       300,
//       function (err, presignedUrl) {
//         if (err) return console.log(err);
//         console.log(presignedUrl);
//       }
//     );
//   } else {
//     return null;
//   }
// };

module.exports = s3Service;
