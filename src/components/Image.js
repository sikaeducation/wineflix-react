const Image = ({ className, url, label }) => {
  return (
    <img className={className} src={url} alt={label} />
  )
}

export default Image
