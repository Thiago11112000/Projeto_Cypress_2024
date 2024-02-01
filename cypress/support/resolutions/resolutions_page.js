/// <reference types = "cypress"/>

export default {
setResolution(size)  {
    if (Array.isArray(size)) {
      cy.viewport(size[0], size[1]);
    } else {
      cy.viewport(size);
    }
  }}