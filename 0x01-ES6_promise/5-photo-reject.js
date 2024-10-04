export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    // Return a promise rejecting with an Error and a string
    reject(new Error(`${filename} cannot be processed`));
  });
}
