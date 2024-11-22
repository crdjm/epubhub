> This project is a work in progress. It is not ready for use yet.
> It is a fork of the epub-modify project that appears to be no longer maintained
> Saved epubs from epub-modiy were were not valid to epubcheck due to
> compression of the mimetype file. In fixing that, I realised there as more
> functionality I wanted to add in support of various epub related projects,
> hence my forking this. I am submitting this now just to see if I have a handle on
> how to create and publish an npm package. More to come...
> David (crdjm1@gmail.com)


# 📖 epubhub

> Easy to read and edit .epub files.

## Install

```bash
npm install epubhub
```

## Usage

```js
import { parseEpub } from 'epubhub'

console.log(await parseEpub(epubBinary))
```
