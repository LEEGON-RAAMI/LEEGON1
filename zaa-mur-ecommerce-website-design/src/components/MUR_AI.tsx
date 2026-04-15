import { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, MapPin } from 'lucide-react';
import { Message } from '../types';

interface MurAiProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MurAi({ isOpen, onClose }: MurAiProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: "Greetings. I am MUR, your digital atelier coordinator. Discover nomadic luxury tailored exquisitely for you. How may I coordinate your journey today?",
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);

    const userText = input.toLowerCase();
    setInput('');

    setTimeout(() => {
      let replyText = "Fascinating. I am directing our atelier technicians regarding your query. Would you prefer visiting our Flagship on A1 City, Brewery Road?";

      if (userText.includes('tailor') || userText.includes('embroider') || userText.includes('bespoke')) {
        replyText = "Ah, customization requests. Within the 'Bespoke Studio', you can apply unique hand-stitched silk lining or tribal mirror placement directly on coats.";
      } else if (userText.includes('address') || userText.includes('location') || userText.includes('where')) {
        replyText = "We are prominently grounded at: A1 City, Brewery Road, Quetta, Balochistan. We accept luxury bookings & site walkthroughs daily from 10 AM.";
      } else if (userText.includes('discount') || userText.includes('promo')) {
        replyText = "ZAA MUR stands uniquely behind premium production methods. However, joining the Guild secures complimentary express secure routing globally.";
      } else if (userText.includes('price') || userText.includes('cost')) {
        replyText = "Prices reflect meticulous craftsmanship, authentic minerals, & exclusive wool. Browse collections fully below or enter direct configuration setups.";
      }

      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), sender: 'ai', text: replyText },
      ]);
    }, 1000);
  };

  const setPrompt = (text: string) => {
    setInput(text);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 font-['Space_Grotesk'] animate-fade-in shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
      <div className="bg-stone-950 border border-white/10 rounded-none flex flex-col h-[500px]">
        {/* Chat Header */}
        <div className="p-4 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 border-b border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <h4 className="font-['Cinzel'] text-sm font-bold text-stone-100 tracking-widest">
              MUR AI Concierge
            </h4>
          </div>
          <button onClick={onClose} className="text-stone-400 hover:text-white transition">
            <X size={18} />
          </button>
        </div>

        {/* Chat Log */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-stone-950/90">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[80%] p-3 text-xs leading-relaxed border ${
                  m.sender === 'user'
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-stone-100'
                    : 'bg-stone-900 border-white/5 text-stone-300'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts */}
        <div className="p-2 flex gap-1.5 overflow-x-auto border-t border-white/5 bg-stone-900/20">
          <button
            onClick={() => setPrompt('Where is the Flagship store located?')}
            className="shrink-0 text-[10px] border border-white/10 px-2 py-1 text-stone-400 hover:border-emerald-400 transition flex items-center gap-1"
          >
            <MapPin size={10} /> Location
          </button>
          <button
            onClick={() => setPrompt('Tell me about Bespoke tailoring.')}
            className="shrink-0 text-[10px] border border-white/10 px-2 py-1 text-stone-400 hover:border-amber-400 transition flex items-center gap-1"
          >
            <Sparkles size={10} /> Bespoke Mode
          </button>
        </div>

        {/* Chat Input */}
        <form onSubmit={handleSend} className="p-3 bg-stone-900/60 border-t border-white/5 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Address inquiry..."
            className="flex-1 bg-stone-950 text-xs border border-white/10 p-2.5 outline-none focus:border-emerald-500 text-stone-200"
          />
          <button
            type="submit"
            className="bg-emerald-500 p-2.5 hover:bg-emerald-400 text-stone-950 transition flex items-center justify-center"
          >
            <Send size={14} />
          </button>
        </form>
      </div>
    </div>
  );
}
