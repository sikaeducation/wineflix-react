import HeaderControls from "./HeaderControls";

const HeroContent = ({ data, headerControlsData }) => {
  return (
    <div className="hero-content">
      <h2>
        <img alt={data.title} src={data.imageUrl} />
      </h2>
      <h3>{data.subtitle}</h3>
      <p>
        {data.description}
      </p>
      <HeaderControls data={headerControlsData} />
    </div>
  )
}

export default HeroContent
