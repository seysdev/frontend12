const baseApi = "https://61ef3d0cd593d20017dbb393.mockapi.io";
async function guardarTarea(tarea) {
  try {
    await fetch(`${baseApi}/tasks`, {
      method: "POST",
      body: JSON.stringify(tarea),
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    alert("No se pudo registrar la tarea");
  }
}

async function obtenerTareas() {
  try {
    const data = await fetch(`${baseApi}/tasks`).then((respuesta) =>
      respuesta.json()
    );
    return data;
  } catch (e) {
    alert("no se pudo obtener las tareas");
  }
}

async function eliminarTarea(idTarea) {
  try {
    await fetch(`${baseApi}/tasks/${idTarea}`, {
      method: "DELETE",
    }).then((respuesta) => respuesta.json());
  } catch (e) {
    alert("no se puedo eliminar la tarea");
  }
}

function guardarTareaEnStorage(tarea) {
  let tareas = [];
  if (localStorage.getItem("tareas")) {
    tareas = [...JSON.parse(localStorage.getItem("tareas")), tarea];
  } else {
    tareas.push(tarea);
  }

  // guardando el objeto en formato json
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

function obtenerTareasEnStorage() {
  return localStorage.getItem("tareas") || JSON.stringify([]);
}

function eliminarTareaEnLocalStorage(tarea) {
  const tareasFiltradas = JSON.parse(obtenerTareasEnStorage()).filter(
    (itemTarea) => itemTarea.task !== tarea.task
  );

  localStorage.setItem("tareas", JSON.stringify(tareasFiltradas));
}

async function todoList() {
  const form = document.querySelector("form"); // atrapando elemento formulario

  /*
   Funcion que creara elemento nodo para inyectar en html
  */
  function creaTarea(tarea) {
    const elementNodo = document.createElement("div");
    elementNodo.innerHTML = `
       ${tarea.task}
       <button class="js_delete">X</button>
       <input type="checkbox" class="js_check"/>
    `;

    elementNodo.querySelector(".js_delete").onclick = async function () {
      if (window.confirm("Estas seguro que quieres eliminar la tarea")) {
        // await eliminarTarea(tarea.id);
        eliminarTareaEnLocalStorage(tarea);
        elementNodo.remove();
      }
    };

    elementNodo.querySelector(".js_check").onchange = function (event) {
      console.log(this.checked);
    };

    return elementNodo;
  }

  /*
   Funcion que inyecta elemento en el dom
  */
  function inyectarElementoEnElDom(elemento) {
    const contenedor = document.getElementById("tasks");

    contenedor.appendChild(elemento);
  }

  /*
  Obtiene las tareas del servicio y las agrega al html
  */
  async function inyectaTareasPorServicio() {
    // OBTENIENDO TAREAS Y RECORRIENDO LAS TAREAS Y CREANDOLAS
    // const tareas = await obtenerTareas();
    const tareas = JSON.parse(obtenerTareasEnStorage());
    console.log(tareas);
    tareas.forEach((tarea) => {
      inyectarElementoEnElDom(creaTarea(tarea));
    });
  }

  /*
   Registro de evento de formulario
  */
  form.onsubmit = async function (event) {
    // registro evento submit
    event.preventDefault(); // quita comportamiento por defecto
    const inputValueTarea = form.querySelector("input").value; // obtiene el valor del input

    // graba tarea en servidor
    // await guardarTarea({
    //   task: inputValueTarea,
    // });

    guardarTareaEnStorage({
      task: inputValueTarea,
    });

    // inyecta el elemento en el dom
    inyectarElementoEnElDom(
      creaTarea({
        task: inputValueTarea,
      })
    );

    form.reset();
  };

  inyectaTareasPorServicio();
}

todoList();
