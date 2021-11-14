import CategoryItem from "./CategoryItem";

const Category = ({ title, data }) => {
  return (
    <section className="category">
      <h2>{title}</h2>
      <ul>
        {data.map((item) => (
          <CategoryItem item={item} />
        ))}
      </ul>
    </section>
  )
};

export default Category
