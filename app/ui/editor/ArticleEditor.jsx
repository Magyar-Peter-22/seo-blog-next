'use client';

import React, { useState } from "react";
import { createEditor } from "slate";
import { Slate, withReact, Editable } from "slate-react"
import TextEditor from "./TextEditor"

export default function ArticleEditor() {
  const [editor] = useState(() => withReact(createEditor()));
  const initialValue = [
    {
      type: 'paragraph',
      children: [
        { text: 'This is editable ' },
        { text: 'rich', bold: true },
        { text: ' text, ' },
        { text: 'much', italic: true },
        { text: ' better than a ' },
        { text: '<textarea>', code: true },
        { text: '!' },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          text: "Since it's rich text, you can do things like turn a selection of text ",
        },
        { text: 'bold', bold: true },
        {
          text: ', or add a semantically rendered block quote in the middle of the page, like this:',
        },
      ],
    },
    {
      type: 'block-quote',
      children: [{ text: 'A wise quote.' }],
    },
    {
      type: 'paragraph',
      align: 'center',
      children: [{ text: 'Try it out for yourself!' }],
    },
  ]

  return (
    <TextEditor editor={editor} initialValue={initialValue} />
  );
}