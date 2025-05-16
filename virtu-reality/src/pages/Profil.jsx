import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const profiles = [
  {
    id: 'scientist',
    name: 'Scientifique',
    description: 'Factuel, vérification des sources, contenu académique',
    color: 'bg-blue-100 text-blue-900 hover:bg-blue-200'
  },
  {
    id: 'conspiracy',
    name: 'Complotiste',
    description: 'Contenu sensationnel, méfiance envers les médias traditionnels',
    color: 'bg-red-100 text-red-900 hover:bg-red-200'
  },
  {
    id: 'artist',
    name: 'Artiste',
    description: 'Contenu visuel, poétique, interprétation libre',
    color: 'bg-purple-100 text-purple-900 hover:bg-purple-200'
  },
  {
    id: 'child',
    name: 'Enfant',
    description: 'Simplicité, jeux, apprentissage ludique',
    color: 'bg-yellow-100 text-yellow-900 hover:bg-yellow-200'
  }
];

const simulatedFeeds = {
  scientist: [
    '📘 Publication scientifique sur le climat',
    '🔬 Vidéo de vulgarisation sur la gravité quantique',
    '📄 Article de Nature : impacts du CO₂'
  ],
  conspiracy: [
    '🌕 Les vérités cachées sur la lune',
    '📑 Document secret : ils nous mentent',
    '💉 La face obscure des vaccins révélée'
  ],
  artist: [
    '🎨 Poème animé sur la solitude',
    '🖼️ Galerie immersive de couleurs',
    '🎵 Musique générative inspirée de la pluie'
  ],
  child: [
    '🌈 Vidéo : Pourquoi le ciel est bleu ?',
    '🐾 Jeu : Découvre les animaux',
    "💧 Animation : Le cycle de l'eau expliqué"
  ]
};

export default function VirtuReality() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <div className="p-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Virtu-Reality</h1>

      {!selectedProfile ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profiles.map((profile) => (
            <motion.div
              key={profile.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`rounded-xl shadow cursor-pointer transition-colors ${profile.color}`}
              onClick={() => setSelectedProfile(profile.id)}
            >
              <Card className="bg-transparent border-none shadow-none">
                <CardContent>
                  <h2 className="text-xl font-semibold mb-2">{profile.name}</h2>
                  <p className="text-sm">{profile.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <div>
          <Button
            onClick={() => setSelectedProfile(null)}
            variant="outline"
            className="mb-6"
          >
            ← Retour aux profils
          </Button>

          <h2 className="text-2xl font-bold mb-4">
            Expérience : {profiles.find((p) => p.id === selectedProfile).name}
          </h2>

          <div className="space-y-4">
            {simulatedFeeds[selectedProfile].map((content, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-4 rounded-xl shadow"
              >
                {content}
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
