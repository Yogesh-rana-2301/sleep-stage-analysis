# 🧠 Sleep Stage Analysis using EEG Data

This project analyzes **EEG data from 10 subjects**—including **5 normal**, **3 insomniacs**, and **2 narcoleptic**—sourced from the **CAP Sleep Database**. We focus on extracting, visualizing, and comparing sleep stage patterns using EEG signal processing and various analysis techniques.

---

## 📂 Dataset

- **Source**: [CAP Sleep Database](https://physionet.org/content/sleep-edfx/1.0.0/)
- **Subjects**:  
  - 5 Normal  
  - 3 Insomniacs  
  - 2 Narcoleptics
- **Files Used**:  
  - `.edf` - EEG signal data  
  - `.txt` - Sleep stage annotations  
  - `.edf.st` - MCAP events

---

## 🎯 Project Goals

- Extract sleep stage annotations
- Create **hypnograms** to visualize stage transitions
- Perform **band power analysis** (Delta, Theta, Alpha, Beta)
- Plot **Power Spectral Density (PSD)**
- Generate **EEG frequency heatmaps**
- Compare subject types: **Normal vs Insomniac vs Narcoleptic**

---

## 🛠️ Preprocessing & Annotation Extraction

- Parse `.txt` files to extract labeled sleep stages
- Convert annotations into DataFrames
- Align annotations with EEG samples for stage-wise analysis

---

## 🛌 Hypnograms

### ✅ Normal Subject
- Clear cyclic progression through sleep stages
- Prominent deep sleep (S3) early in the night
- REM sleep appears more in later hours
- Sparse and even MCAP distribution

### ❗ Insomniac Subject
- Long wakeful periods
- Fragmented transitions and reduced REM
- Clustered MCAP events (micro-arousals)

### ⚡ Narcoleptic Subject
- Abrupt transitions between Wake, REM, and light sleep
- Early REM onset, fragmented cycles
- Abnormal Delta wave presence during wake stages

---

## 📊 Band Power Analysis

| Band   | Frequency Range | Significance              |
|--------|------------------|---------------------------|
| Delta  | 0.5–4 Hz         | Deep sleep (S3)           |
| Theta  | 4–8 Hz           | Light sleep (S1, S2)      |
| Alpha  | 8–13 Hz          | Relaxed wakefulness       |
| Beta   | 13–30 Hz         | Alertness, stress, focus  |

### Normal Subject
- High Delta and Theta during deep and light sleep
- Minimal Alpha and Beta → restful brain state

### Insomniac Subject
- Elevated Alpha and Theta during sleep → wake-like activity
- Reduced Delta → shallow, fragmented sleep

### Narcoleptic Subject
- Strong Delta during wake and REM
- Frequent Theta/Alpha in unusual stages → unstable transitions

---

## 📈 Power Spectral Density (PSD)

Used to observe how power is distributed across frequency bands.

### Normal Subject
- Peak at Delta (0–5 Hz), smooth drop off  
- Minimal high-frequency activity

### Insomniac Subject
- Peak at Delta, but with an Alpha spike  
- Indicates disrupted sleep patterns

### Narcoleptic Subject
- Sustained Delta power even during wakefulness  
- Irregular transitions and REM intrusions

---

## 🌡️ EEG Frequency Heatmaps

### Normal Subjects
- High Delta wave power across all brain regions
- Balanced activity with minimal Beta

### Insomniac Subjects
- Delta dominant but scattered  
- Low Alpha/Beta → shallow sleep, less depth

### Narcoleptic Subjects
- Delta appears where it shouldn’t (e.g., wake)  
- Weak high-frequency activity → irregular REM activity

---

## 🔥 Time Domain & Channel Heatmaps

### Normal Subject
- Smooth Delta dominance  
- Balanced channel activity across regions

### Insomniac Subject
- Fragmented Delta  
- Uneven distribution → sleep instability

### Narcoleptic Subject
- Delta present in wake or S1  
- P4-O2 shows irregular REM-related activity

---

## ✅ Conclusion

This study highlights distinct sleep characteristics for:

- **Normal subjects**: Stable and restorative cycles
- **Insomniacs**: Fragmented and shallow sleep
- **Narcoleptics**: Rapid REM onset, irregular transitions

By analyzing EEG signals through hypnograms, band power, PSD, and heatmaps, we gain deep insights into the **neurophysiology of sleep disorders**.

---

## 🧰 Tools & Libraries
- Python
- NumPy, Pandas
- Matplotlib, Seaborn
- MNE, SciPy, pyEDFlib

  

