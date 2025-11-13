export enum ActivityType {
    Adventure = 'Adventure',
    Leisure = 'Leisure',
    Fun = 'Fun',
}

export enum Companion {
    Colleagues = 'Colleagues',
    Family = 'Family',
    Kids = 'Family with Kids',
    Solo = 'Solo',
}

export enum Interest {
    History = 'History',
    Food = 'Food',
    Art = 'Art',
    Nature = 'Nature',
    Shopping = 'Shopping',
    Nightlife = 'Nightlife',
    NearbyEvents = 'Nearby Events',
}

export enum Budget {
    Low = 'Low',
    MidRange = 'Mid-Range',
    HighEnd = 'High-End',
}

export enum TransportType {
    PersonalVehicle = 'Personal Vehicle',
    PublicTransport = 'Public Transport',
}

export interface PlannerFormData {
    destination: string;
    startingPoint: string;
    activityType: ActivityType;
    companion: Companion;
    startDate: string; // YYYY-MM-DD
    endDate: string | null; // YYYY-MM-DD
    interests: Interest[];
    budget: Budget;
    transport: TransportType;
}

export interface Activity {
    time: string;
    title: string;
    description: string;
    imageUrl?: string;
}

export interface DayPlanData {
    date: string; // YYYY-MM-DD
    dayOfWeek: string;
    activities: Activity[];
}

export interface ItineraryPlan {
    days: DayPlanData[];
}