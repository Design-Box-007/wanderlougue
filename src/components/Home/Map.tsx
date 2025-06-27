'use client'

import React from 'react'
import SubHeading from '../Comman/SubHeading'
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
} from 'react-simple-maps'

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

// Countries by ISO 3166-1 numeric codes
const visibleCountries = [
    '250', // France
    '756', // Switzerland
    '380', // Italy
    '764', // Thailand
    '480', // Mauritius
    '462', // Maldives
    '704', // Vietnam
    '268', // Georgia
    '051', // Armenia
    '344', // Hong Kong
    '356', // India
    '784', // UAE
]

const countryNames: Record<string, string> = {
    '250': 'France',
    '756': 'Switzerland',
    '380': 'Italy',
    '764': 'Thailand',
    '480': 'Mauritius',
    '462': 'Maldives',
    '704': 'Vietnam',
    '268': 'Georgia',
    '051': 'Armenia',
    '344': 'Hong Kong',
    '356': 'India',
    '784': 'UAE',
}

const countryCoords: Record<string, [number, number]> = {
    '250': [2.2137, 46.2276],     // France
    '756': [8.2275, 46.8182],     // Switzerland
    '380': [12.5674, 41.8719],    // Italy
    '764': [100.9925, 15.8700],   // Thailand
    '480': [57.5522, -20.3484],   // Mauritius
    '462': [73.2207, 3.2028],     // Maldives
    '704': [108.2772, 14.0583],   // Vietnam
    '268': [43.3569, 42.3154],    // Georgia
    '051': [45.0382, 40.0691],    // Armenia
    '344': [114.1694, 22.3193],   // Hong Kong
    '356': [78.9629, 20.5937],    // India
    '784': [54.3773, 24.4539],    // UAE
}

// Offset [x, y] for label placement to avoid overlap
const labelOffsets: Record<string, [number, number]> = {
    '250': [-60, -30],   // France - far left
    '756': [-20, -40],   // Switzerland - upper left
    '380': [40, -20],    // Italy - right side
    '268': [50, -30],    // Georgia - left and slightly down
    '051': [50, -10],    // Armenia - far left and down

    '784': [10, -30],    // UAE - right and up
    '356': [0,-40],      // India - right side
    '462': [0, 40],    // Maldives - left side
    '480': [30, 40],     // Mauritius - right and down

    '764': [50, -10],    // Thailand - far right
    '704': [60, 10],     // Vietnam - far right, down
    '344': [50, -30],    // Hong Kong - far right, up
}


const Map = () => {
    return (
        <section className="space-y-6">
            <SubHeading heading="Country-Specific Travel Guides" className="text-center" />

            <div className="flex justify-center">
                <ComposableMap projectionConfig={{ scale: 150 }} className="max-w-full">
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                const isVisible = visibleCountries.includes(geo.id)
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={isVisible ? '#1f2937' : '#E5E7EB'}
                                        stroke="#fffff0"
                                        strokeWidth={0.4}
                                        style={{
                                            default: { outline: 'none' },
                                            hover: { outline: 'none', fill: '#4B5563' },
                                            pressed: { outline: 'none' },
                                        }}
                                    />
                                )
                            })
                        }
                    </Geographies>

                    {/* Pins with label lines */}
                    {visibleCountries.map((code) => {
                        const coords = countryCoords[code]
                        const [offsetX, offsetY] = labelOffsets[code] ?? [2.2137, 46.2276]
                        if (!coords) return null

                        return (
                            <Marker key={code} coordinates={coords}>
                                <circle r={4} fill="#ef4444" stroke="#fff" strokeWidth={1} />
                                <line
                                    x1={0}
                                    y1={0}
                                    x2={offsetX}
                                    y2={offsetY}
                                    stroke="#6b7280"
                                    strokeWidth={1}
                                />
                                <text
                                    x={offsetX}
                                    y={offsetY - 4}
                                    textAnchor="start"
                                    style={{
                                        fontFamily: 'sans-serif',
                                        fontSize: 10,
                                        fill: '#111827',
                                        fontWeight: 600,
                                    }}
                                >
                                    {countryNames[code]}
                                </text>
                            </Marker>
                        )
                    })}
                </ComposableMap>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-6">
                {visibleCountries.map((code) => (
                    <span
                        key={code}
                        className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 font-medium text-base shadow"
                    >
                        {countryNames[code]}
                    </span>
                ))}
            </div>
        </section>
    )
}

export default Map
