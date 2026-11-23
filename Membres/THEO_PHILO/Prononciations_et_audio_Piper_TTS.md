# 🔊 Prononciations et audio — Piper TTS

> **Mise à jour :** 2026-10-09  
> **Décision :** l'audio des fiches sera généré avec **Piper TTS** (local, gratuit, Windows), et non plus avec la voix robotique du navigateur.  
> Les fichiers audio seront générés à l'avance (`.wav` ou `.mp3`), puis lus dans les fiches HTML via la balise `<audio>`.  
> Le dictionnaire ci-dessous sert à **normaliser le texte avant de le donner à Piper**, pour que les noms propres soient prononcés correctement.

| Nom écrit | Prononciation audio |
| :--- | :--- |
| Kant | Kante |
| Hume | HYOUM |
| Descartes | Décarte |
| Popper | Popèr |
| Malebranche | Malbranche |
| Husserl | Ousserl |

---

## À faire

- [ ] Générer les audios avec Piper TTS.
- [ ] Stocker les fichiers dans un dossier `audio/`.
- [ ] Mettre à jour les boutons des fiches HTML pour pointer vers les fichiers audio.
- [ ] Tester le rendu sur `verite_q1.html` à `q4.html`.