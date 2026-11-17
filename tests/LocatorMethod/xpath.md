

xpath
=====
 
  XML path Language

Attribute:
  //htmltagname[@propertyname='propertyvalue']

Text():
 
//htmltagname[text()='textcontent']  - include space 

Contains()
   
   //htmltagname[contains(text(),'textcontent')]


   //button[contains(text(),'Submit Order')]   ===>    Submit Order    
                                                      submit Order now

Normalize-speace()

   //htmltagame[normalize-space()='textcontent']