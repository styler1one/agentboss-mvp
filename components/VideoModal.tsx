'use client'

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Play, Volume2, VolumeX, Download } from "lucide-react"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  video: {
    id: string
    title: string
    company: string
    person: string
    role: string
    duration: string
    thumbnail: string
    description: string
    results: {
      roi: string
      savings: string
      timeframe: string
    }
  }
}

export default function VideoModal({ isOpen, onClose, video }: VideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4">
      <Card className="max-w-4xl w-full shadow-2xl animate-in zoom-in-95 duration-300">
        <CardHeader className="relative bg-gradient-to-r from-agent-navy to-agent-blue text-white">
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 text-white hover:bg-white/20"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </Button>
          
          <div className="pr-12">
            <CardTitle className="text-2xl">{video.title}</CardTitle>
            <CardDescription className="text-blue-100">
              {video.person}, {video.role} bij {video.company}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          {/* Video Player */}
          <div className="relative bg-black aspect-video">
            {!isPlaying ? (
              // Thumbnail with Play Button
              <div 
                className="relative w-full h-full bg-cover bg-center cursor-pointer group"
                style={{ backgroundImage: `url(${video.thumbnail})` }}
                onClick={() => setIsPlaying(true)}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                    <Play className="w-8 h-8 text-agent-blue ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm bg-black/60 px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
              </div>
            ) : (
              // Video Player Simulation
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center text-white space-y-4">
                  <div className="w-16 h-16 bg-agent-blue rounded-full flex items-center justify-center mx-auto animate-pulse">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">{video.person}</div>
                    <div className="text-sm text-gray-300">{video.role}, {video.company}</div>
                  </div>
                  <div className="max-w-md mx-auto text-sm text-gray-300 leading-relaxed">
                    "{video.description}"
                  </div>
                </div>
                
                {/* Video Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20"
                      onClick={() => setIsPlaying(false)}
                    >
                      <Play className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20"
                      onClick={() => setIsMuted(!isMuted)}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </Button>
                  </div>
                  <div className="text-white text-sm">
                    1:23 / {video.duration}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Video Info */}
          <div className="p-6 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-agent-navy mb-2">{video.title}</h3>
              <p className="text-gray-600">{video.description}</p>
            </div>

            {/* Results */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-3">Behaalde Resultaten:</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-agent-green">{video.results.roi}</div>
                  <div className="text-sm text-gray-600">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-agent-blue">{video.results.savings}</div>
                  <div className="text-sm text-gray-600">Jaarlijkse besparing</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{video.results.timeframe}</div>
                  <div className="text-sm text-gray-600">Payback periode</div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="agent" size="lg" className="flex-1">
                📞 Book Vergelijkbare Resultaten
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                Download Case Study PDF
              </Button>
            </div>

            {/* Company Info */}
            <div className="border-t pt-4">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div>
                  <strong>{video.company}</strong> • {video.role}
                </div>
                <Badge variant="success">
                  Geverifieerde klant
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
