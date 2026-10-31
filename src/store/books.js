import { reactive } from "vue";
import cleanCodeImage from "../../img/clean_code.jpg";
import computerNetworksImage from "../../img/computer_networks.jpg";
import designPatternsImage from "../../img/design_pattern.jpg";
import algorithmsImage from "../../img/intro_algo.jpg";
import javascriptImage from "../../img/js_book.jpg";

export const store = reactive({
  books: [
    {
      id: 1,
      title: "Clean Code",
      author: "Robert C. Martin",
      year: 2008,
      image: cleanCodeImage,
      isFav: true,
    },
    {
      id: 2,
      title: "Computer Networks",
      author: "Andrew S. Tanenbaum",
      year: 2011,
      image: computerNetworksImage,
      isFav: false,
    },
    {
      id: 3,
      title: "Design Patterns",
      author: "Gang of Four",
      year: 1994,
      image: designPatternsImage,
      isFav: false,
    },
    {
      id: 4,
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      year: 2009,
      image: algorithmsImage,
      isFav: false,
    },
    {
      id: 5,
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      year: 2008,
      image: javascriptImage,
      isFav: false,
    },
  ],
});
