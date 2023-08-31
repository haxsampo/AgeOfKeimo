function importAll(r) {
  let images = {}
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); })
  return images
}

const images = importAll(require.context('../../art/civ_symbols', false, /\.(png|jpe?g|svg|webp)$/))

export default images