import * as bootstrap from "bootstrap";
import "./index.scss";

document.addEventListener("DOMContentLoaded", () => {
    // Tooltip
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Sidebar Toggle
    const sidebarToggle = document.body.querySelector("#sidebarToggle");
    if (sidebarToggle) {
        sidebarToggle.addEventListener("click", event => {
            event.preventDefault();
            document.body.classList.toggle("sb-sidenav-toggled");
            localStorage.setItem("sb|sidebar-toggle", document.body.classList.contains("sb-sidenav-toggled"));
        });
    }

    // Mock Student Data
    const students = [
        { code: "S001", name: "Alice Johnson", course: "Computer Science", dob: "2000-05-14" },
        { code: "S002", name: "Bob Smith", course: "Engineering", dob: "1999-11-22" },
        { code: "S003", name: "Charlie Brown", course: "Mathematics", dob: "2001-07-08" },
        { code: "S004", name: "Diana Prince", course: "Physics", dob: "2002-03-30" },
        { code: "S005", name: "Ethan Hunt", course: "Chemistry", dob: "1998-12-19" }
    ];

    const tableBody = document.getElementById("studentTableBody");

    students.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.code}</td>
            <td>${student.name}</td>
            <td>${student.course}</td>
            <td>${student.dob}</td>
            <td>
                <button class="btn btn-warning btn-sm" data-bs-toggle="tooltip" title="Edit Student">Edit</button>
                <button class="btn btn-danger btn-sm" data-bs-toggle="tooltip" title="Delete Student">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    // Reinitialize tooltips after adding new elements
    tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });
});