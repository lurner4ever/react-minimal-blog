const posts = [
  {
    id: "ae9aba96-183d-11eb-adc1-0242ac120002",
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, odio!",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, laborum alias. Deleniti aperiam, dicta perferendis officia adipisci est aliquam tempore id culpa vel quisquam incidunt inventore a totam saepe minima praesentium ea nesciunt quis quia. Aliquam accusamus libero repellendus delectus.",
    date: "Wed, Mar 10 2021",
    tags: ["#java", " #js", " #react"],
  },
  {
    id: "ae9ac630-183d-11eb-adc1-0242ac120002",
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, odio!",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, laborum alias. Deleniti aperiam, dicta perferendis officia adipisci est aliquam tempore id culpa vel quisquam incidunt inventore a totam saepe minima praesentium ea nesciunt quis quia. Aliquam accusamus libero repellendus delectus.",
    date: "Mon, Jan 11 2021",
    tags: ["#java", " #js", " #react"],
  },
  {
    id: "ae9ac568-183d-11eb-adc1-0242ac120002",
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, odio!",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, laborum alias. Deleniti aperiam, dicta perferendis officia adipisci est aliquam tempore id culpa vel quisquam incidunt inventore a totam saepe minima praesentium ea nesciunt quis quia. Aliquam accusamus libero repellendus delectus.",
    date: "Sun, May 30 2021",
    tags: ["#java", " #js", " #react"],
  },
  {
    id: "ae9abdb6-183d-11eb-adc1-0242ac120002",
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, odio!",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, laborum alias. Deleniti aperiam, dicta perferendis officia adipisci est aliquam tempore id culpa vel quisquam incidunt inventore a totam saepe minima praesentium ea nesciunt quis quia. Aliquam accusamus libero repellendus delectus.",
    date: "Sat, Dec 26 2020",
    tags: ["#java", " #js", " #react"],
  },
  {
    id: "ae9abea6-183d-11eb-adc1-0242ac120002",
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, odio!",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, laborum alias. Deleniti aperiam, dicta perferendis officia adipisci est aliquam tempore id culpa vel quisquam incidunt inventore a totam saepe minima praesentium ea nesciunt quis quia. Aliquam accusamus libero repellendus delectus.",
    date: "Thu, Mar 25 2021",
    tags: ["#java", " #js", " #react"],
  },
  {
    id: "ae9ac23e-183d-11eb-adc1-0242ac120002",
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, odio!",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, laborum alias. Deleniti aperiam, dicta perferendis officia adipisci est aliquam tempore id culpa vel quisquam incidunt inventore a totam saepe minima praesentium ea nesciunt quis quia. Aliquam accusamus libero repellendus delectus.",
    date: "Thu, Nov 19 2020",
    tags: ["#java", " #js", " #react"],
  },
  {
    id: "ae9abf96-183d-11eb-adc1-0242ac120002",
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, odio!",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, laborum alias. Deleniti aperiam, dicta perferendis officia adipisci est aliquam tempore id culpa vel quisquam incidunt inventore a totam saepe minima praesentium ea nesciunt quis quia. Aliquam accusamus libero repellendus delectus.",
    date: "Mon, Jul 19 2021",
    tags: ["#java", " #js", " #react"],
  },
  {
    id: "ae9ac31a-183d-11eb-adc1-0242ac120002",
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, odio!",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, laborum alias. Deleniti aperiam, dicta perferendis officia adipisci est aliquam tempore id culpa vel quisquam incidunt inventore a totam saepe minima praesentium ea nesciunt quis quia. Aliquam accusamus libero repellendus delectus.",
    date: "Wed, Dec 09 2020",
    tags: ["#java", " #js", " #react"],
  },
];

function getPosts() {
  return posts;
}

function getPost(id) {
  return posts.find((post) => post.id === id);
}

export { getPosts, getPost };
