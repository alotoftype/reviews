// import "./styles.scss";
// import reviews from "./data/reviews.json";
// import $ from "jquery";
var reviews
(async () => {
  let response = await fetch("src/data/reviews.json");
  reviews = await response.json();
  console.log('reviews inside function', reviews)
  const rendered_reviews = reviews
  .map((review) => {
    return `
  <div class="review_container">
    <div class="review_image twentytwenty-container">
  
        <img src="${review.before.image}" alt="${review.before.alt_text}"/>
        <img src="${review.after.image}" alt="${review.after.alt_text}" />

    </div>
    <div class="review_content">
      <h3>${review.title}</h3>
      <p>${review.quote}</p>
      <div class="review_url">
        <a href="${review.link.url}">${review.link.text}</a>
      </div>
    </div>
  </div>
  `;
  })
  .join("");
document.querySelector(".reviews_wrapper").innerHTML = `
${rendered_reviews}
`;
  return reviews;
})()

