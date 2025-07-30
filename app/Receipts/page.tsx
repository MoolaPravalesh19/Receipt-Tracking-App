import PDFDropzone from '@/components/PDFDropzone'
import Recieptslist from '@/components/Recieptslist'
import React from 'react'

function Receipts() {
  return (
    <div className='container mx-auto py-10 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
            {/* <PDF DROPZONE>*/}
            <PDFDropzone/>
            
            <Recieptslist/>
        </div>
        
    </div>
    
  )
}

export default Receipts