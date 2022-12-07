/**
* Component to display Homepage features
 * @name FeatureCard
 * @param {string} src
 * @param {string} alt
 * @param {string} title
 * @param {string} text
 * @returns {?JSX}
*/

// JSX _____________________________________________________________________________
function FeatureCard ({ src, alt, title, text }) {
  return (
    <div className="feature-item">
      <img src={src} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default FeatureCard