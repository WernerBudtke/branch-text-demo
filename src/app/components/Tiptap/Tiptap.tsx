'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Dispatch, SetStateAction, useRef } from 'react';

type TiptapProps = {
    onBranchedParagraphClick: Dispatch<SetStateAction<any>>;
}

const Tiptap = (props: TiptapProps) => {
  const { onBranchedParagraphClick } = props;
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: '<p>Hello World! 🌎️</p>',
    editable: true,
    editorProps: 
    {
      attributes: 
      {
        class: 'bg-white text-black p-4 h-full w-full'
      }
    },
  })
  onBranchedParagraphClick(editor?.state.tr.selection.$anchor.pos)
  console.log(editor?.state.tr.selection.$anchor.pos) // saco lo que tengo seleccionado
  console.log(editor?.commands)
  // tocas boton - creas los parros, mete uno donde habias estado tocando boton

  return (
    <>
        {/* <input type="button" value="Pene" onClick={() => editor?.chain().insertContent(`<p>1234567890</p>`).run()} />
        <input type="button" value="Pija" onClick={() => editor?.chain().deleteRange({from: 0, to: 11}).insertContentAt(0,`<p>Concha</p>`).run()} /> */}
        <EditorContent editor={editor} className='h-screen'/>
    </>
  )
}

export default Tiptap