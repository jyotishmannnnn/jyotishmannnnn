<a href="https://www.jyotishmandas.in/">
  <img src="./assets/header.svg" alt="Jyotishman Das, Co-founder & CEO of Sentrix Robotics, building the sense of touch for embodied AI" width="100%">
</a>

<p>
  <a href="https://www.jyotishmandas.in/"><img src="https://img.shields.io/badge/jyotishmandas.in-0a0a0b?style=flat-square&logo=googlechrome&logoColor=ff4d2e" alt="Website"></a>
  <a href="https://www.sentrixrobotics.com/"><img src="https://img.shields.io/badge/Sentrix_Robotics-0a0a0b?style=flat-square&logo=probot&logoColor=ff4d2e" alt="Sentrix Robotics"></a>
  <a href="https://www.linkedin.com/in/jyotishmandas-in/"><img src="https://img.shields.io/badge/LinkedIn-0a0a0b?style=flat-square&logo=linkedin&logoColor=e9e4d8" alt="LinkedIn"></a>
  <a href="https://www.kaggle.com/jyotishmannnn"><img src="https://img.shields.io/badge/Kaggle-0a0a0b?style=flat-square&logo=kaggle&logoColor=e9e4d8" alt="Kaggle"></a>
  <a href="https://devfolio.co/@jyotishmandasin"><img src="https://img.shields.io/badge/Devfolio-0a0a0b?style=flat-square&logo=devdotto&logoColor=e9e4d8" alt="Devfolio"></a>
  <a href="mailto:jyotishmandas.official@gmail.com"><img src="https://img.shields.io/badge/Email-0a0a0b?style=flat-square&logo=gmail&logoColor=e9e4d8" alt="Email"></a>
</p>

Robots can see and hear. They still can't feel. At **[Sentrix Robotics](https://www.sentrixrobotics.com/)** we build tactile gloves, sensing skins and the data layer robots learn touch from.

```yaml
based_in:   Chennai, from Guwahati, Assam
building:   Sentrix Robotics · IIMA Ventures portfolio · NVIDIA Inception · DPIIT recognised
studying:   B.Tech Mechatronics & Automation, VIT Chennai
led:        Team Genesis, VIT Chennai's first humanoid robotics team (55 members)
patents:    UniHub (published) + 6 filed
```

## The Sentrix touch-data stack

Every repo below is one stage of a single pipeline, from raw sensor to training-ready dataset.

```
  glove / skin ──▶ Capture ──▶ Sync ──▶ DataEngine ──▶ Viz
                      ▲                     ▲
          Sim ────────┘      Contracts ─────┴── shared schemas and wire formats
```

| Stage | Repo | What it does |
|---|---|---|
| 00 | [**SentrixEcosystem**](https://github.com/jyotishmannnnn/SentrixEcosystem) | Architecture, workflows and docs hub for the whole platform |
| 01 | [**SentrixCapture**](https://github.com/jyotishmannnnn/SentrixCapture) | Hardware capture: descriptor-driven acquisition, USB transport, session recording |
| 02 | [**SentrixSync**](https://github.com/jyotishmannnnn/SentrixSync) | Modality-neutral, event-based sync for multimodal sensor streams |
| 03 | [**SentrixDataEngine**](https://github.com/jyotishmannnnn/SentrixDataEngine) | Dataset materialization, validation, packaging and export |
| 04 | [**SentrixViz**](https://github.com/jyotishmannnnn/SentrixViz) | Visualization and analysis for tactile datasets and derived signals |
| ++ | [**SentrixContracts**](https://github.com/jyotishmannnnn/SentrixContracts) | Canonical schemas, descriptors and wire formats shared by every stage |
| ++ | [**SentrixSim**](https://github.com/jyotishmannnnn/SentrixSim) | Tactile data simulator |
| ++ | [**Tactile-Glove-Benchmark**](https://github.com/jyotishmannnnn/Tactile-Glove-Benchmark) | Open benchmark for tactile sensing, finger proprioception and dataset quality |

## Other builds

| Project | |
|---|---|
| [**SIH Haptic Prosthetic**](https://github.com/jyotishmannnnn/SIH-Prosthetic-Haptic-Feedback) | A prosthetic hand that feels: eFlesh tactile patch, dual ESP32-S3, 6-channel vibrotactile feedback |
| [**NeuroHand**](https://github.com/jyotishmannnnn/NeuroHand-EEG-Based-Prosthetic-Control-System) | Real-time EEG control of a tendon-driven prosthetic hand |
| [**GestureLIO**](https://github.com/jyotishmannnnn/GestureLIO) | Gesture recognition from a Unitree L2 4D LiDAR. No ML, no GPU, no ROS |
| [**ReFold**](https://github.com/jyotishmannnnn/ReFlow) | Self-improving protein-repair agent on Gemma 4, ESM-2 and ESMFold. 🏆 Best Social Impact, Build with Gemma |
| [**SyncRoom**](https://github.com/jyotishmannnnn/SyncRoom) | WebRTC watch parties and video calls, live at [havnn.in](https://havnn.in) |
| [**ContactHarvester**](https://github.com/jyotishmannnnn/ContactHarvester) | Open-source lead discovery: crawls, extracts, validates and ranks contacts |

## Toolbox

<p>
  <img src="https://img.shields.io/badge/Python-141312?style=flat-square&logo=python&logoColor=e9e4d8" alt="Python">
  <img src="https://img.shields.io/badge/C++-141312?style=flat-square&logo=cplusplus&logoColor=e9e4d8" alt="C++">
  <img src="https://img.shields.io/badge/TypeScript-141312?style=flat-square&logo=typescript&logoColor=e9e4d8" alt="TypeScript">
  <img src="https://img.shields.io/badge/ESP32-141312?style=flat-square&logo=espressif&logoColor=e9e4d8" alt="ESP32">
  <img src="https://img.shields.io/badge/Arduino-141312?style=flat-square&logo=arduino&logoColor=e9e4d8" alt="Arduino">
  <img src="https://img.shields.io/badge/Raspberry_Pi-141312?style=flat-square&logo=raspberrypi&logoColor=e9e4d8" alt="Raspberry Pi">
  <img src="https://img.shields.io/badge/ROS-141312?style=flat-square&logo=ros&logoColor=e9e4d8" alt="ROS">
  <img src="https://img.shields.io/badge/PyTorch-141312?style=flat-square&logo=pytorch&logoColor=e9e4d8" alt="PyTorch">
  <img src="https://img.shields.io/badge/OpenCV-141312?style=flat-square&logo=opencv&logoColor=e9e4d8" alt="OpenCV">
  <img src="https://img.shields.io/badge/NVIDIA-141312?style=flat-square&logo=nvidia&logoColor=e9e4d8" alt="NVIDIA">
  <img src="https://img.shields.io/badge/Unity_XR-141312?style=flat-square&logo=unity&logoColor=e9e4d8" alt="Unity">
  <img src="https://img.shields.io/badge/WebRTC-141312?style=flat-square&logo=webrtc&logoColor=e9e4d8" alt="WebRTC">
</p>

`tactile sensing` · `haptics` · `sensor fusion` · `embedded systems` · `humanoids` · `XR interfaces` · `computer vision`

## Recognition

- **IIMA Ventures** portfolio company, and AI Summer Resident 2026 (1 of 43 founders from 32,000+ applicants)
- **NVIDIA Inception** member · **CrftHQ** Fellow 2025
- **Eureka! IIT Bombay**: zonalist (Sentrix, 2025), Top 600 in Asia (OptifiX, 2024)
- **DevsHouse 2025**: Top 7 of 1,200+ (MLH x GDG)
- **Techtron, IIT Guwahati**: National Bronze in robotics

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/jyotishmannnnn/jyotishmannnnn/output/snake-dark.svg">
  <img alt="Contribution graph being eaten by a snake" src="https://raw.githubusercontent.com/jyotishmannnnn/jyotishmannnnn/output/snake.svg" width="100%">
</picture>

<sub>More at <a href="https://www.jyotishmandas.in/">jyotishmandas.in</a></sub>
