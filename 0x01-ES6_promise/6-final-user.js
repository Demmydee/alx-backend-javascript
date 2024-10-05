import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  /**
  * Accepts three arguments firstname(string), lastname(string), and
  * filename(string).
  * Calls the two other functions
  * Returns a structured array when the promises are all settled
  */
  return Promise
    // Call the signUpUser() and uploadPhoto() functions
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    // When the promises are all settled it should return an array with the
    // given structure
    .then((results) => (
      results.map((out) => ({
        status: out.status,
        value: out.status === 'fulfilled' ? out.value : String(out.reason),
      }))
    ));
}
