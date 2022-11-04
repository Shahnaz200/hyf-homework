//your dog year is 10 human years
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
let shouldShowResultInDogYears = true;
const dogYear = dogYearFuture - dogYearOfBirth;
if (shouldShowResultInDogYears) {
  console.log(
    `Your dog will be ${dogYear * 10} dog years old in ${dogYearFuture}`
  );
} else {
  console.log(
    `Your dog will be ${dogYear} human years old in ${dogYearFuture}`
  );
}
