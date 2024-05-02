import React, { useState } from "react";
import AdminNavigation from "./AdminNavigation";
import GroupsList from "./GroupsList";
import StudentList from "./StudentList";
import GroupInfo from "./groupInfo"; // Importa el componente BlankComponent

const groups = [
  {
    id: 1,
    name: "Grupo 1A",
    students: [
      { id: 1, name: "Juan Pérez", grade: "Primero Sección A" },
      { id: 2, name: "María López", grade: "Primero Sección A" },
      { id: 3, name: "Carlos Martínez", grade: "Primero Sección A" },
      { id: 4, name: "Laura García", grade: "Primero Sección A" },
      { id: 5, name: "José Rodríguez", grade: "Primero Sección A" },
      { id: 6, name: "Ana Fernández", grade: "Primero Sección A" },
      { id: 7, name: "David Ruiz", grade: "Primero Sección A" },
      { id: 8, name: "Sofía González", grade: "Primero Sección A" },
      { id: 9, name: "Diego Pérez", grade: "Primero Sección A" },
      { id: 10, name: "Paula Martínez", grade: "Primero Sección A" },
      { id: 11, name: "Alejandro López", grade: "Primero Sección A" },
      { id: 12, name: "Valentina García", grade: "Primero Sección A" },
      { id: 13, name: "Miguel Rodríguez", grade: "Primero Sección A" },
      { id: 14, name: "Lucía Fernández", grade: "Primero Sección A" },
      { id: 15, name: "Eduardo González", grade: "Primero Sección A" },
      { id: 16, name: "Andrea Ruiz", grade: "Primero Sección A" },
      { id: 17, name: "Fernando Pérez", grade: "Primero Sección A" },
      { id: 18, name: "Natalia Martínez", grade: "Primero Sección A" },
      { id: 19, name: "Luisa López", grade: "Primero Sección A" },
      { id: 20, name: "Javier García", grade: "Primero Sección A" },
      { id: 21, name: "Camila Fernández", grade: "Primero Sección A" },
      { id: 22, name: "Daniel González", grade: "Primero Sección A" },
      { id: 23, name: "Isabella Ruiz", grade: "Primero Sección A" },
      { id: 24, name: "Pablo Pérez", grade: "Primero Sección A" },
      { id: 25, name: "Valeria Martínez", grade: "Primero Sección A" },
    ],
    data: {},
  },
  {
    id: 2,
    name: "Grupo 2A",
    students: [
      { "id": 21, "name": "Mateo Sánchez", "grade": "Segundo Sección A" },
      { "id": 22, "name": "Renata Vargas", "grade": "Segundo Sección A" },
      { "id": 23, "name": "Ángel Medina", "grade": "Segundo Sección A" },
      { "id": 24, "name": "Abril Torres", "grade": "Segundo Sección A" },
      { "id": 25, "name": "Iker Mendoza", "grade": "Segundo Sección A" },
      { "id": 26, "name": "Luna Cervantes", "grade": "Segundo Sección A" },
      { "id": 27, "name": "Dante Pineda", "grade": "Segundo Sección A" },
      { "id": 28, "name": "Abril Jiménez", "grade": "Segundo Sección A" },
      { "id": 29, "name": "Matías Ríos", "grade": "Segundo Sección A" },
      { "id": 30, "name": "Mariana Herrera", "grade": "Segundo Sección A" },
      { "id": 31, "name": "Juan Pablo Reyes", "grade": "Segundo Sección A" },
      { "id": 32, "name": "Valentina Torres", "grade": "Segundo Sección A" },
      { "id": 33, "name": "Emiliano Soto", "grade": "Segundo Sección A" },
      { "id": 34, "name": "Amanda López", "grade": "Segundo Sección A" },
      { "id": 35, "name": "Leonardo Gómez", "grade": "Segundo Sección A" },
      { "id": 36, "name": "Frida Álvarez", "grade": "Segundo Sección A" },
      { "id": 37, "name": "Iván Rivera", "grade": "Segundo Sección A" },
      { "id": 38, "name": "Ximena Ortiz", "grade": "Segundo Sección A" },
      { "id": 39, "name": "Santiago Márquez", "grade": "Segundo Sección A" },
      { "id": 40, "name": "Paola Guerrero", "grade": "Segundo Sección A" }
    ],
    data: {},
  },
  {
    id: 3,
    name: "Grupo 3A",
    students: [
      { "id": 40, "name": "Emilio Pérez", "grade": "Tercero Sección A" },
      { "id": 41, "name": "Valeria Gutiérrez", "grade": "Tercero Sección A" },
      { "id": 42, "name": "Diego García", "grade": "Tercero Sección A" },
      { "id": 43, "name": "Victoria Martínez", "grade": "Tercero Sección A" },
      { "id": 44, "name": "Ángela Sánchez", "grade": "Tercero Sección A" },
      { "id": 45, "name": "Ericka Torres", "grade": "Tercero Sección A" },
      { "id": 46, "name": "Javier Pérez", "grade": "Tercero Sección A" },
      { "id": 47, "name": "Natalia Ramírez", "grade": "Tercero Sección A" },
      { "id": 48, "name": "Leonel Vázquez", "grade": "Tercero Sección A" },
      { "id": 49, "name": "Fernanda Díaz", "grade": "Tercero Sección A" },
      { "id": 50, "name": "Samuel Rodríguez", "grade": "Tercero Sección A" },
      { "id": 51, "name": "Sofía Flores", "grade": "Tercero Sección A" },
      { "id": 52, "name": "Raúl Martínez", "grade": "Tercero Sección A" },
      { "id": 53, "name": "Camila Guzmán", "grade": "Tercero Sección A" },
      { "id": 54, "name": "Eduardo Soto", "grade": "Tercero Sección A" },
      { "id": 55, "name": "Valentina Ríos", "grade": "Tercero Sección A" },
      { "id": 56, "name": "Héctor Cruz", "grade": "Tercero Sección A" },
      { "id": 57, "name": "Paulina Aguilar", "grade": "Tercero Sección A" },
      { "id": 58, "name": "César Hernández", "grade": "Tercero Sección A" },
      { "id": 59, "name": "Daniela Castillo", "grade": "Tercero Sección A" },
      { "id": 60, "name": "Andrés López", "grade": "Tercero Sección A" }
    ],
    
    data: {},
  },
  {
    id: 4,
    name: "Grupo 4A",
    students: [
      { "id": 61, "name": "Isabella Morales", "grade": "Cuarto Sección A" },
      { "id": 62, "name": "Gabriel Torres", "grade": "Cuarto Sección A" },
      { "id": 63, "name": "Mariana Gómez", "grade": "Cuarto Sección A" },
      { "id": 64, "name": "Carlos Rivera", "grade": "Cuarto Sección A" },
      { "id": 65, "name": "Ana Sofía Ramos", "grade": "Cuarto Sección A" },
      { "id": 66, "name": "José Luis Ortiz", "grade": "Cuarto Sección A" },
      { "id": 67, "name": "Ximena Méndez", "grade": "Cuarto Sección A" },
      { "id": 68, "name": "Sebastián Silva", "grade": "Cuarto Sección A" },
      { "id": 69, "name": "Karen Torres", "grade": "Cuarto Sección A" },
      { "id": 70, "name": "Joaquín Pérez", "grade": "Cuarto Sección A" },
      { "id": 71, "name": "Valeria Cruz", "grade": "Cuarto Sección A" },
      { "id": 72, "name": "Martín Ramírez", "grade": "Cuarto Sección A" },
      { "id": 73, "name": "Regina Sánchez", "grade": "Cuarto Sección A" },
      { "id": 74, "name": "Juan Carlos Vázquez", "grade": "Cuarto Sección A" },
      { "id": 75, "name": "Fernanda López", "grade": "Cuarto Sección A" },
      { "id": 76, "name": "Diego Fernández", "grade": "Cuarto Sección A" },
      { "id": 77, "name": "María José Gutiérrez", "grade": "Cuarto Sección A" },
      { "id": 78, "name": "Alejandro Díaz", "grade": "Cuarto Sección A" },
      { "id": 79, "name": "Frida Martínez", "grade": "Cuarto Sección A" },
      { "id": 80, "name": "Roberto Soto", "grade": "Cuarto Sección A" },
      { "id": 81, "name": "Diana Pérez", "grade": "Cuarto Sección A" },
      { "id": 82, "name": "Manuel García", "grade": "Cuarto Sección A" },
      { "id": 83, "name": "Victoria Moreno", "grade": "Cuarto Sección A" },
      { "id": 84, "name": "Eduardo Ruiz", "grade": "Cuarto Sección A" },
      { "id": 85, "name": "Isaac Flores", "grade": "Cuarto Sección A" },
      { "id": 86, "name": "Laura Méndez", "grade": "Cuarto Sección A" }
    ]
    ,
    data: {},
  },
  {
    id: 5,
    name: "Grupo 5A",
    students: [
      { "id": 87, "name": "Sofía Rodríguez", "grade": "Quinto Sección A" },
      { "id": 88, "name": "Ángel Hernández", "grade": "Quinto Sección A" },
      { "id": 89, "name": "Daniela Castro", "grade": "Quinto Sección A" },
      { "id": 90, "name": "Adrián Martínez", "grade": "Quinto Sección A" },
      { "id": 91, "name": "Valentina Álvarez", "grade": "Quinto Sección A" },
      { "id": 92, "name": "Miguel González", "grade": "Quinto Sección A" },
      { "id": 93, "name": "Fernanda Martínez", "grade": "Quinto Sección A" },
      { "id": 94, "name": "Emilio Torres", "grade": "Quinto Sección A" },
      { "id": 95, "name": "Camila Aguilar", "grade": "Quinto Sección A" },
      { "id": 96, "name": "Pablo Díaz", "grade": "Quinto Sección A" },
      { "id": 97, "name": "Regina Pérez", "grade": "Quinto Sección A" },
      { "id": 98, "name": "Óscar Sánchez", "grade": "Quinto Sección A" },
      { "id": 99, "name": "Lucía Rodríguez", "grade": "Quinto Sección A" },
      { "id": 100, "name": "Javier Herrera", "grade": "Quinto Sección A" },
      { "id": 101, "name": "Paulina Ramírez", "grade": "Quinto Sección A" },
      { "id": 102, "name": "Héctor Flores", "grade": "Quinto Sección A" },
      { "id": 103, "name": "Natalia Gutiérrez", "grade": "Quinto Sección A" },
      { "id": 104, "name": "Andrés Vázquez", "grade": "Quinto Sección A" },
      { "id": 105, "name": "María Fernández", "grade": "Quinto Sección A" },
      { "id": 106, "name": "Juan Carlos Ruiz", "grade": "Quinto Sección A" },
      { "id": 107, "name": "Elena Martínez", "grade": "Quinto Sección A" },
      { "id": 108, "name": "Ricardo Gómez", "grade": "Quinto Sección A" },
      { "id": 109, "name": "Alejandra Torres", "grade": "Quinto Sección A" },
      { "id": 110, "name": "Fernando Soto", "grade": "Quinto Sección A" },
      { "id": 111, "name": "Isabel Gómez", "grade": "Quinto Sección A" }
    ]
    ,
    data: {},
  },
];

const AdminPanel = () => {
  const [selectedOption, setSelectedOption] = useState("grupo");
  const [selectedGroup, setSelectedGroup] = useState(groups[0] || null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showStudentList, setShowStudentList] = useState(false);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setSelectedGroup(null);
    setSelectedStudent(null);
    setShowStudentList(false);
  };

  const handleViewGroupData = (group) => {
    setSelectedOption("datos_grupo"); // Cambia la opción seleccionada a "datos_grupo"
    setSelectedGroup(group);
    setSelectedStudent(null);
    setShowStudentList(false);
  };

  const handleViewStudentDetails = (student) => {
    setSelectedStudent(student);
  };

  const handleViewGroupStudents = (group) => {
    setShowStudentList(true);
    setSelectedGroup(group); // Establecer el nuevo grupo seleccionado
    setSelectedStudent(null); // Limpiar el estudiante seleccionado
  };

  const handleClearSelectedGroup = () => {
    setSelectedGroup(null);
    setSelectedStudent(null);
    setShowStudentList(false);
  };

  const handleBackButtonClick = () => {
    setSelectedOption("grupo"); // Cambia la opción seleccionada a "grupo" al dar clic en Atrás
    setSelectedGroup(null); // Limpia el grupo seleccionado
  };

  return (
    <div className="container">
      <div className="row">
        <AdminNavigation
          selectedOption={selectedOption}
          onSelectOption={handleSelectOption}
        />
        <div className="col-md-9 mt-4" style={{ marginLeft: "20rem" }}>
          {selectedOption === "grupo" && !showStudentList && (
            <GroupsList
              groups={groups}
              onViewGroupData={handleViewGroupData}
              onViewGroupStudents={handleViewGroupStudents}
            />
          )}

          {selectedOption === "grupo" && showStudentList && (
            <StudentList
              selectedGroup={selectedGroup}
              onBackButtonClick={handleClearSelectedGroup}
            />
          )}

          {selectedOption === "pruebas" && (
            <div className="card">
              <div className="card-header bg-primary text-white">Pruebas</div>
              <div className="card-body">
                <p>Contenido de las pruebas...</p>
              </div>
            </div>
          )}

          {selectedOption === "datos_grupo" && (
            <GroupInfo onBackButtonClick={handleBackButtonClick} />
          )}
        </div>
      </div>
      {/* {selectedGroup && selectedOption !== "datos_grupo" && !showStudentList && (
  <GroupDetails
    group={selectedGroup}
    students={selectedGroup.students}
    selectedStudent={selectedStudent}
    onViewStudentDetails={handleViewStudentDetails}
  />
)} */}
    </div>
  );
};

export default AdminPanel;