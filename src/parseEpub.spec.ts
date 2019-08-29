import parseEpub from './parseEpub'
import _ from 'lodash'
import * as path from 'path'

const baseDir = process.cwd()


describe(`parser`, () => {
  test('Result should have keys', async () => {
    const epub = await parseEpub(path.join(baseDir, 'fixtures/basic-v3plus2.epub'))

    expect(epub.version).toBe('3.0')
    expect(epub).toHaveProperty('metadata')
    expect(epub).toHaveProperty('manifest')
    expect(epub).toHaveProperty('spine')
    expect(epub.nav.toc).toHaveLength(2)
  })

  test('Should get file', async() => {
    const epub = await parseEpub(path.join(baseDir, 'fixtures/basic-v3plus2.epub'))

    expect(epub.manifest[0]).toMatchObject({
      id: 'cover.css',
      href: 'css/cover.css',
      'media-type': 'text/css',
    })
    expect(typeof await epub.manifest[0].getText()).toBe('string')
  })
})