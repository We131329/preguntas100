import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Paper,
  IconButton,
  Chip,
  Stack,
} from "@mui/material";
import {
  Close as CloseIcon,
  Visibility as VisibilityIcon,
  NavigateNext as NextIcon,
  RestartAlt as RestartIcon,
  AddCircleOutlined as AddIcon,
} from "@mui/icons-material";
import { preguntasMexicanas } from "./QuestionsMexico";

// --- Interfaces y Tipos ---
interface Respuesta {
  texto: string;
  puntos: number;
  revelada: boolean;
}

interface Pregunta {
  id: number;
  pregunta: string;
  respuestas: Respuesta[];
}

type SoundType = "strike" | "reveal";

const shuffleArray = (array: Pregunta[]) => {
  // Loop from the last element down to the second element
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements array[i] and array[j] using destructuring assignment
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// --- Banco de preguntas ---
/* const PREGUNTAS_BANCO: Pregunta[] = shuffleArray(PREGUNTAS);
 */
// Reproductor de efectos de sonido usando Web Audio API
const playSound = (type: SoundType): void => {
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    const audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === "strike") {
      // Buzzer de error
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(130, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.6);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.6);
    } else if (type === "reveal") {
      // Tono de acierto
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.1); // A5
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.4);
    }
  } catch (e) {
    console.log("Audio no soportado o interactuado previamente", e);
  }
};

export default function App() {
  const [bancoDePreguntas, setBancoDePreguntas] = useState(
    shuffleArray(preguntasMexicanas),
  );
  const [preguntaIndex, setPreguntaIndex] = useState<number>(0);
  const [preguntaActual, setPreguntaActual] = useState<Pregunta>(
    bancoDePreguntas[0],
  );
  const [puntosRonda, setPuntosRonda] = useState<number>(0);
  const [equipo1, setEquipo1] = useState<number>(0);
  const [equipo2, setEquipo2] = useState<number>(0);
  const [strikes, setStrikes] = useState<number>(0);
  const [showStrikeOverlay, setShowStrikeOverlay] = useState<boolean>(false);

  // Revelar respuesta por índice
  const handleRevelar = (index: number): void => {
    if (preguntaActual.respuestas[index].revelada) return;

    playSound("reveal");
    const nuevasRespuestas = [...preguntaActual.respuestas];
    nuevasRespuestas[index] = {
      ...nuevasRespuestas[index],
      revelada: true,
    };

    setPreguntaActual({
      ...preguntaActual,
      respuestas: nuevasRespuestas,
    });

    setPuntosRonda((prev) => prev + nuevasRespuestas[index].puntos);
  };

  // Marcar fallo (X)
  const handleStrike = (): void => {
    if (strikes < 3) {
      playSound("strike");
      setStrikes((prev) => prev + 1);
      setShowStrikeOverlay(true);
      setTimeout(() => setShowStrikeOverlay(false), 1200);
    }
  };

  // Limpiar strikes acumulados en la ronda
  const resetStrikes = (): void => setStrikes(0);

  // Sumar puntos acumulados al marcador de un equipo
  const asignarPuntos = (equipo: 1 | 2): void => {
    if (equipo === 1) setEquipo1((prev) => prev + puntosRonda);
    if (equipo === 2) setEquipo2((prev) => prev + puntosRonda);
    setPuntosRonda(0);
  };

  // Siguiente pregunta del banco
  const siguientePregunta = (): void => {
    const nextIdx = (preguntaIndex + 1) % bancoDePreguntas.length;
    setPreguntaIndex(nextIdx);
    setPreguntaActual(JSON.parse(JSON.stringify(bancoDePreguntas[nextIdx])));
    setPuntosRonda(0);
    setStrikes(0);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#0a192f",
        color: "#fff",
        py: 4,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Overlay Animado cuando se marca un Strike (X) */}
      {showStrikeOverlay && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: "rgba(255, 0, 0, 0.4)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "8rem", md: "16rem" },
              color: "#d32f2f",
              fontWeight: "900",
              textShadow: "0 0 30px #000, 0 0 50px #ff0000",
            }}
          >
            ❌
          </Typography>
        </Box>
      )}

      <Container maxWidth="md">
        {/* Título Principal */}
        <Typography
          variant="h3"
          align="center"
          sx={{
            color: "#fbc02d",
            textShadow: "2px 2px 8px #000",
            mb: 3,
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: "900",
          }}
        >
          100 MEXICANOS DIJERON
        </Typography>

        {/* Marcadores de Equipos y Acumulado */}
        <Grid
          container
          spacing={2}
          sx={{ mb: 3, justifyContent: "space-between" }}
        >
          <Grid item xs={4}>
            <Paper
              elevation={6}
              sx={{
                p: 2,
                textAlign: "center",
                bgcolor: "#1e3a8a",
                color: "#fff",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                EQUIPO 1
              </Typography>
              <Typography variant="h3" color="#60a5fa" fontWeight="bold">
                {equipo1}
              </Typography>
              <Button
                size="small"
                variant="contained"
                color="info"
                startIcon={<AddIcon />}
                onClick={() => asignarPuntos(1)}
                sx={{ mt: 1 }}
              >
                Sumar
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper
              elevation={6}
              sx={{
                p: 2,
                textAlign: "center",
                bgcolor: "#0f172a",
                border: "2px solid #fbc02d",
                color: "#fff",
              }}
            >
              <Typography variant="subtitle2" color="#fbc02d">
                PUNTOS EN RONDA
              </Typography>
              <Typography variant="h2" color="#fbc02d" fontWeight="900">
                {puntosRonda}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper
              elevation={6}
              sx={{
                p: 2,
                textAlign: "center",
                bgcolor: "#831843",
                color: "#fff",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                EQUIPO 2
              </Typography>
              <Typography variant="h3" color="#f472b6" fontWeight="bold">
                {equipo2}
              </Typography>
              <Button
                size="small"
                variant="contained"
                color="secondary"
                startIcon={<AddIcon />}
                onClick={() => asignarPuntos(2)}
                sx={{ mt: 1 }}
              >
                Sumar
              </Button>
            </Paper>
          </Grid>
        </Grid>

        {/* Pregunta Actual */}
        <Card
          sx={{
            bgcolor: "#1e293b",
            color: "#fff",
            mb: 3,
            border: "1px solid #334155",
          }}
        >
          <CardContent>
            <Typography variant="h5" align="center" fontWeight="500">
              ({preguntaActual.id})
            </Typography>
          </CardContent>
        </Card>

        {/* Tablero de Respuestas */}
        <Box sx={{ mb: 3 }}>
          {preguntaActual.respuestas.map((resp, index) => (
            <Paper
              key={index}
              elevation={4}
              sx={{
                p: 2,
                mb: 1.5,
                bgcolor: resp.revelada ? "#15803d" : "#0f172a",
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #334155",
                cursor: resp.revelada ? "default" : "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: resp.revelada ? "#15803d" : "#1e293b",
                },
              }}
              onClick={() => handleRevelar(index)}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Chip label={index + 1} color="warning" size="small" />
                <Typography variant="h6" fontWeight="bold">
                  {resp.revelada ? resp.texto : "──────────────────────"}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {resp.revelada ? (
                  <Chip
                    label={`${resp.puntos} pts`}
                    color="default"
                    sx={{ bgcolor: "#fff", fontWeight: "bold" }}
                  />
                ) : (
                  <IconButton color="warning" size="small">
                    <VisibilityIcon />
                  </IconButton>
                )}
              </Box>
            </Paper>
          ))}
        </Box>

        {/* Sección de Strikes (X) */}
        <Paper
          elevation={4}
          sx={{ p: 2, bgcolor: "#1e293b", mb: 3, border: "1px solid #334155" }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#ef4444", fontWeight: "bold", mr: 1 }}
              >
                STRIKES:
              </Typography>
              {[1, 2, 3].map((num) => (
                <Box
                  key={num}
                  sx={{
                    width: 45,
                    height: 45,
                    borderRadius: 1,
                    bgcolor: num <= strikes ? "#dc2626" : "#334155",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.8rem",
                    fontWeight: "900",
                    color: "#fff",
                    boxShadow: num <= strikes ? "0 0 10px #dc2626" : "none",
                  }}
                >
                  {num <= strikes ? "X" : ""}
                </Box>
              ))}
            </Box>

            <Stack direction="row" spacing={1}>
              <Button
                variant="contained"
                color="error"
                startIcon={<CloseIcon />}
                onClick={handleStrike}
                disabled={strikes >= 3}
                sx={{ fontWeight: "bold" }}
              >
                Marcar X
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                onClick={resetStrikes}
                size="small"
              >
                Limpiar X
              </Button>
            </Stack>
          </Stack>
        </Paper>

        {/* Controles del Juego */}
        <Stack direction="row" justifyContent="space-between">
          <Button
            variant="outlined"
            color="warning"
            startIcon={<RestartIcon />}
            onClick={() => {
              setEquipo1(0);
              setEquipo2(0);
              setPuntosRonda(0);
              setStrikes(0);
              setBancoDePreguntas(shuffleArray(preguntasMexicanas));
              setPreguntaIndex(0);
              setPreguntaActual(bancoDePreguntas[0]);
            }}
          >
            Reiniciar Juego
          </Button>

          <Button
            variant="outlined"
            color="warning"
            startIcon={<RestartIcon />}
            onClick={() => {
              setEquipo1(0);
              setEquipo2(0);
              setPuntosRonda(0);
              setStrikes(0);
            }}
          >
            Reiniciar Marcador
          </Button>

          <Button
            variant="contained"
            color="success"
            endIcon={<NextIcon />}
            onClick={siguientePregunta}
            sx={{ fontWeight: "bold" }}
          >
            Siguiente Pregunta
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
