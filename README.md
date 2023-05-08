# AWS CSRF Token Extraction Challenge

This repository contains an exploration of different methods to extract the CSRF token from the AWS Management Console. It is important to note that the recommended way of interacting with AWS services programmatically is to use the AWS CLI or SDKs. The approaches explored here are for demonstration purposes only and should not be used in real-world applications due to potential security risks and violations of AWS's terms of service.

## Methods Explored

1. Extracting the CSRF token from the DOM
2. Listening for network requests and searching for the X-CSRF-Token header

### Method 1: Extracting the CSRF token from the DOM

This method involves querying the DOM for a meta tag containing the CSRF token.

```javascript
const metaTag = document.querySelector('meta[name="awsc-csrf-token"]');
```

### Method 2: Listening for network requests and searching for the X-CSRF-Token header

This method involves registering a Service Worker to listen for network requests and searching for the X-CSRF-Token header in the response headers.

**Note**: This method was not successful in registering a Blob URL on the AWS Management Console.

## Conclusion

While these approaches demonstrate different ways to extract the CSRF token, they are not recommended for use in real-world applications due to potential security risks and violations of AWS's terms of service. Always use the recommended tools, such as the AWS CLI or SDKs, for programmatic interactions with AWS services.
