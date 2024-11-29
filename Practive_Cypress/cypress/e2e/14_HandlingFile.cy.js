/// <reference types='cypress'/>
import 'cypress-file-upload'
describe('Handling files', ()=>{
    it('Single file upload', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('test.pdf')
        cy.get('#file-submit').click()
        cy.wait(3000)
        cy.get('.example h3').contains('File Uploaded!')
        cy.get('.example h3').should('have.text','File Uploaded!') // assertion
    })

    it('File upload - Rename', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath: 'test.pdf', fileName:  'myFile.pdf'})
        cy.get('#file-submit').click()
        cy.wait(3000)
        cy.get('.example h3').contains('File Uploaded!')
        cy.get('.example h3').should('have.text','File Uploaded!') // assertion

    })

    it('File upload - Drag & Drop', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
       cy.get('.dz-success-mark.dz-clickable#drag-drop-upload').attachFile('test.pdf', {subjectType: 'drag-n-drop'})
       cy.get('#drag-drop-upload .dz-filename span').should('have.text', 'test.pdf')

    })

    it('Multiple files upload', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['test.pdf', 'test_01.pdf'])
        cy.get('#fileList li').should('have.length', 2)
    })

    it.only('File upload - Shadow dom', ()=>{
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get(".smart-browse-input", {includeShadowDom: true}).attachFile('test_01.pdf')
        cy.wait(3000)
        cy.get('.smart-item-name', {includeShadowDom: true}).should('have.text', 'test_01.pdf')
    })
    
})