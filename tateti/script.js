    
        var jugadorActual = 'X';
        var tateti = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];


         // Función para realizar un movimiento
        function hacerMovimiento(fila, columna) {

            // Se ocupa el simbolo del jugador actual para ponerlo en la casilla
            if (tateti[fila][columna] === '') {
                tateti[fila][columna] = jugadorActual;
                document.getElementById('tateti').rows[fila].cells[columna].textContent = jugadorActual;

                if (verificarGanador()) {
                    alert('¡Jugador ' + jugadorActual + ' ha ganado!');
                    reiniciarJuego();
                } else {
                    jugadorActual = (jugadorActual === 'X') ? 'O' : 'X';
                }
            }
        }
 // Recorremos todas las combinaciones posibles para ganar en el tablero.
        function verificarGanador() {
            for (var i = 0; i < 3; i++) {
                if (tateti[i][0] === jugadorActual && tateti[i][1] === jugadorActual && tateti[i][2] === jugadorActual) {
                    return true;
                }
                if (tateti[0][i] === jugadorActual && tateti[1][i] === jugadorActual && tateti[2][i] === jugadorActual) {
                    return true;
                }
            }
            if (tateti[0][0] === jugadorActual && tateti[1][1] === jugadorActual && tateti[2][2] === jugadorActual) {
                return true;
            }
            if (tateti[0][2] === jugadorActual && tateti[1][1] === jugadorActual && tateti[2][0] === jugadorActual) {
                return true;
            }
            return false; // Si encontramos una línea O DIAGONAL ganadora, retornamos true.
        
        }
// Función para reiniciar el juego
        function reiniciarJuego() {
            jugadorActual = 'X';
            tateti = [
                ['', '', ''],
                ['', '', ''],
                ['', '', '']
            ];

             // Limpiamos el juego.
            var celdas = document.getElementsByTagName('td');
            for (var i = 0; i < celdas.length; i++) {
                celdas[i].textContent = '';
            }
        }