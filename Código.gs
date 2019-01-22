function crearcarpetas()

{
 var name = 'Nombre del alumno'
 var doc = DocumentApp.create(name);
 var folder = DriveApp.createFolder(name);
 DriveApp.getRootFolder().createFile(doc);     
    
}