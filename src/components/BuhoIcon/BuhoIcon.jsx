export default function Icon ({ src, widht }) {
  return (
    <section className="flex justify-center">
      <img
        src={src}
        className={widht}
        alt="Buho Button"
      />
    </section>
  )
}