
export type TagType = 'algo' | 'math' | 'react' ;

export namespace TagType {
  export const ALGO: TagType = 'algo';
  export const MATH: TagType = 'math';
  export const REACT: TagType = 'react';
}

export const convertTag = (tag: TagType) => {
    switch (tag) {
        case TagType.ALGO:
            return `<p style={color: red}>algo<p>`;
        case TagType.REACT:
            return `<p style={color: red}>algo<p>`
        default:
            return `<p style={color: red}>algo<p>`;
    }
}