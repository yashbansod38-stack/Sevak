export default function SectionHeader({ tag, title, icon = 'ॐ' }) {
  return (
    <div className="text-center mb-14">
      <span className="section-tag">{tag}</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-divider">
        <span className="divider-line" />
        <span
          className="text-dharma-saffron text-lg"
          style={{ filter: 'drop-shadow(0 0 6px #FF6B00)' }}
        >
          {icon}
        </span>
        <span className="divider-line-rev" />
      </div>
    </div>
  )
}
