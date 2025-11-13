import React, { useState, useCallback } from 'react';
import { PlannerForm } from './components/PlannerForm';
import { ItineraryDisplay } from './components/ItineraryDisplay';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import type { PlannerFormData, ItineraryPlan } from './types';
import { generatePlan } from './services/geminiService';

const App: React.FC = () => {
    const [itinerary, setItinerary] = useState<ItineraryPlan | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleFormSubmit = useCallback(async (formData: PlannerFormData) => {
        setIsLoading(true);
        setError(null);
        setItinerary(null);
        try {
            const plan = await generatePlan(formData);
            setItinerary(plan);
        } catch (err) {
            console.error(err);
            setError('Failed to generate itinerary. The model may be busy. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-800 via-purple-800 to-amber-700">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
                <div className="max-w-4xl mx-auto">
                    <p className="text-center text-lg md:text-xl text-amber-200 mb-8 animate-fade-in">
                        Tell us your weekend aspirations, and our AI will craft the perfect getaway plan for you.
                    </p>
                    <PlannerForm onSubmit={handleFormSubmit} isLoading={isLoading} />
                    <div className="mt-12">
                        <ItineraryDisplay itinerary={itinerary} isLoading={isLoading} error={error} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;