const CategoryItem = ({ item }) => {
  return (
    <li>
      <div className={item.label.toLowerCase()}>
        <img src={item.imageUrl} alt={item.label} />

        {item.isNew &&
          <span className="new-badge">New!</span>
        }

        {item.progress &&
          <div className="amount-consumed">
            <progress min="0" max="100" value={item.progress}></progress>
          </div>
        }
      </div>
    </li>
  )
};

export default CategoryItem
