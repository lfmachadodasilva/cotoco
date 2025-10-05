import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';
import { MonzoIcon } from './components/MonzoIcon';
import { RevolutIcon } from './components/RevolutIcon';

type Language = 'en' | 'pt';

interface Translations {
  [key: string]: {
    en: string;
    pt: string;
  };
}

const translations: Translations = {
  heroTitle: {
    en: 'Help Baby Arrive in Style 💸👶',
    pt: 'Ajude o Bebê a Chegar com Estilo 💸👶',
  },
  heroDescription: {
    en: "Our little human is coming in December! Help us buy all the things we didn't know babies needed (spoiler alert: it's everything).",
    pt: 'Nosso pequeno humano está chegando em dezembro! Nos ajude a comprar todas as coisas que não sabíamos que bebês precisavam (spoiler: é tudo).',
  },
  languageTitle: {
    en: 'Choose your language',
    pt: 'Escolha seu idioma',
  },
  amountsTitle: {
    en: 'Pick your generosity level 😄',
    pt: 'Escolha seu nível de generosidade 😄',
  },
  amount10: {
    en: "Baby's first socks fund 🧦",
    pt: 'Fundo das primeiras meias 🧦',
  },
  amount20: {
    en: 'Diaper disaster prevention 💩',
    pt: 'Prevenção de desastres de fralda 💩',
  },
  amount50: {
    en: 'Midnight snack support 🍪',
    pt: 'Apoio para lanches da madrugada 🍪',
  },
  amount100: {
    en: 'Sleep restoration donation 😴',
    pt: 'Doação para restaurar o sono 😴',
  },
  transferTitle: {
    en: 'Transfer Instructions',
    pt: 'Instruções de Transferência',
  },
  pixDescription: {
    en: "PIX it like it's hot 🔥",
    pt: 'PIX como se não houvesse amanhã 🔥',
  },
  copyPix: {
    en: 'Copy PIX',
    pt: 'Copiar PIX',
  },
  pixCopied: {
    en: 'PIX copied to clipboard!',
    pt: 'PIX copiado para a área de transferência!',
  },
  footer: {
    en: 'Thanks for keeping our baby cute and well-fed 💖',
    pt: 'Obrigado por manter nosso bebê fofo e bem alimentado 💖',
  },
};

const amounts = {
  en: [
    { value: 10, symbol: '£' },
    { value: 20, symbol: '£' },
    { value: 50, symbol: '£' },
    { value: 100, symbol: '£' },
  ],
  pt: [
    { value: 50, symbol: 'R$' },
    { value: 100, symbol: 'R$' },
    { value: 250, symbol: 'R$' },
    { value: 500, symbol: 'R$' },
  ],
};

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const t = (key: string) =>
    (translations[key] as { en: string; pt: string })?.[language] || key;

  const handleCopyPix = () => {
    const pixKey = 'luiz@example.com'; // Replace with actual PIX key
    navigator.clipboard.writeText(pixKey);
    toast.success(t('pixCopied'));
  };

  const generateMonzoLink = (amount: number) => {
    return `https://monzo.me/luizdasilva5/${amount}.00?h=ae9PgJ`;
  };

  const generateRevolutLink = (amount: number) => {
    return `https://revolut.me/luizdasilva5/${amount}`;
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="mx-auto max-w-md space-y-8 px-4 py-8">
        {/* Hero Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center"
        >
          <motion.div
            animate={{
              rotate: [0, -5, 5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            className="flex justify-center"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1623707430616-d9f956bcac2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwYmFieSUyMGJvdHRsZSUyMGNhcnRvb258ZW58MXx8fHwxNzU5Njc3OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Baby bottle"
              className="h-32 w-32 rounded-full border-4 border-purple-500 object-cover shadow-lg"
            />
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-purple-400">
              {t('heroTitle')}
            </h1>
            <p className="leading-relaxed text-gray-300">
              {t('heroDescription')}
            </p>
          </div>
        </motion.div>

        {/* Language Selection Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-center text-gray-300">{t('languageTitle')}</h2>
          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLanguage('en')}
              className={`flex h-16 w-16 items-center justify-center rounded-full border-2 transition-all ${
                language === 'en'
                  ? 'border-blue-400 bg-blue-500/20 shadow-lg'
                  : 'border-gray-600 hover:border-gray-400'
              }`}
            >
              <span className="text-2xl">🇬🇧</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLanguage('pt')}
              className={`flex h-16 w-16 items-center justify-center rounded-full border-2 transition-all ${
                language === 'pt'
                  ? 'border-green-400 bg-green-500/20 shadow-lg'
                  : 'border-gray-600 hover:border-gray-400'
              }`}
            >
              <span className="text-2xl">🇧🇷</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Suggested Amounts Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-center text-xl text-white">
            {t('amountsTitle')}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {(amounts[language] as { value: number; symbol: string }[]).map(
              (amount, index) => (
                <motion.div
                  key={amount.value}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card
                    className={`cursor-pointer border-gray-700 bg-gray-900/50 transition-all duration-300 hover:border-purple-500 ${
                      selectedAmount === amount.value
                        ? 'card-glow border-purple-500'
                        : ''
                    }`}
                    onClick={() => setSelectedAmount(amount.value)}
                  >
                    <CardContent className="space-y-2 p-4 text-center">
                      <div className="text-2xl font-bold text-purple-400">
                        {amount.symbol}
                        {amount.value}
                      </div>
                      <div className="text-sm text-gray-400">
                        {t(
                          `amount${amount.value}` in translations
                            ? `amount${amount.value}`
                            : 'amount10'
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* Transfer Instructions Block */}
        {selectedAmount && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-center text-xl text-white">
              {t('transferTitle')}
            </h2>

            {language === 'en' ? (
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="border-gray-700 bg-gray-900/50 transition-all hover:border-blue-500">
                    <CardContent className="p-4">
                      <Button
                        onClick={() =>
                          window.open(
                            generateMonzoLink(selectedAmount),
                            '_blank'
                          )
                        }
                        className="gradient-blue-purple w-full transition-opacity hover:opacity-90"
                      >
                        <MonzoIcon className="mr-2 h-4 w-4" />
                        Pay £{selectedAmount} via Monzo
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="border-gray-700 bg-gray-900/50 transition-all hover:border-purple-500">
                    <CardContent className="p-4">
                      <Button
                        onClick={() =>
                          window.open(
                            generateRevolutLink(selectedAmount),
                            '_blank'
                          )
                        }
                        className="gradient-purple-blue w-full transition-opacity hover:opacity-90"
                      >
                        <RevolutIcon className="mr-2 h-4 w-4" />
                        Pay £{selectedAmount} via Revolut
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="border-gray-700 bg-gray-900/50 transition-all hover:border-green-500">
                  <CardContent className="space-y-4 p-4">
                    <div className="text-center">
                      <h3 className="mb-2 text-lg font-medium text-green-400">
                        {t('pixDescription')}
                      </h3>
                      <div className="rounded-lg border border-gray-600 bg-gray-800 p-3">
                        <p className="break-all font-mono text-sm text-gray-300">
                          luiz@example.com
                        </p>
                      </div>
                    </div>
                    <Button
                      onClick={handleCopyPix}
                      className="w-full bg-green-600 transition-colors hover:bg-green-700"
                    >
                      <Copy className="mr-2 h-4 w-4" />
                      {t('copyPix')}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="pt-8 text-center"
        >
          <p className="text-sm text-gray-400">{t('footer')}</p>
        </motion.div>
      </div>
    </div>
  );
}
